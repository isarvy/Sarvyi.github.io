import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { profile } from '../data/profile'
import { Reveal } from './Reveal'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Add a short subject'),
  message: z.string().min(10, 'Message is too short'),
  botcheck: z.string().optional(),
})
type Form = z.infer<typeof schema>

// Set VITE_WEB3FORMS_KEY (free key from web3forms.com) to enable sending.
// Without it the form falls back to opening the visitor's mail app.
const KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Form>({ resolver: zodResolver(schema) })

  const onSubmit = async (d: Form) => {
    if (d.botcheck) return
    if (!KEY) {
      const body = encodeURIComponent(`${d.message}\n\n— ${d.name} (${d.email}${d.phone ? `, ${d.phone}` : ''})`)
      window.open(`mailto:${profile.email}?subject=${encodeURIComponent(d.subject)}&body=${body}`, '_self')
      return
    }
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: KEY, ...d }),
      })
      const json = await res.json()
      if (!json.success) throw new Error('rejected')
      setStatus('sent')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const err = (m?: string) => m && <p role="alert" className="field-error">{m}</p>

  return (
    <section className="contact" id="contact">
      <Reveal origin="top">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>
      </Reveal>

      <Reveal origin="bottom">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <input type="text" tabIndex={-1} autoComplete="off" className="hp" aria-hidden {...register('botcheck')} />
          <div className="input-box">
            <div className="field">
              <label htmlFor="name" className="sr-only" hidden>Full Name</label>
              <input id="name" type="text" placeholder="Full Name" {...register('name')} />
              {err(errors.name?.message)}
            </div>
            <div className="field">
              <label htmlFor="email" hidden>Email Address</label>
              <input id="email" type="email" placeholder="Email Address" {...register('email')} />
              {err(errors.email?.message)}
            </div>
          </div>
          <div className="input-box">
            <div className="field">
              <label htmlFor="phone" hidden>Mobile Number</label>
              <input id="phone" type="tel" placeholder="Mobile Number (optional)" {...register('phone')} />
            </div>
            <div className="field">
              <label htmlFor="subject" hidden>Subject</label>
              <input id="subject" type="text" placeholder="Email Subject" {...register('subject')} />
              {err(errors.subject?.message)}
            </div>
          </div>
          <div className="field full">
            <label htmlFor="message" hidden>Your Message</label>
            <textarea id="message" rows={10} placeholder="Your Message" {...register('message')} />
            {err(errors.message?.message)}
          </div>
          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          <p aria-live="polite" className={`form-status ${status === 'sent' ? 'ok' : status === 'error' ? 'err' : ''}`}>
            {status === 'sent' && 'Message sent. Thanks, I will get back to you.'}
            {status === 'error' && `Something went wrong. Please email ${profile.email} directly.`}
          </p>
        </form>
      </Reveal>
    </section>
  )
}
