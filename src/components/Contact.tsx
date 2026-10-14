import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { profile } from '../data/profile'
import { Section } from './Section'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  subject: z.string().min(3, 'Add a short subject'),
  message: z.string().min(10, 'Message is too short'),
  botcheck: z.string().optional(),
})
type Form = z.infer<typeof schema>

// Set VITE_WEB3FORMS_KEY (free key from web3forms.com) to enable sending.
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
      const body = encodeURIComponent(`${d.message}\n\n— ${d.name} (${d.email})`)
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(d.subject)}&body=${body}`
      return
    }
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: KEY, ...d }),
      })
      const json = await res.json()
      if (!json.success) throw new Error()
      setStatus('sent')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const field = 'w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent'
  const err = (m?: string) => m && <p role="alert" className="mt-1 text-xs text-red-400">{m}</p>

  return (
    <Section id="contact" title="Contact" cmd="curl -X POST /contact">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-3 text-muted">
          <p>Open to DevOps, SRE and platform engineering roles and interesting infra problems.</p>
          <p>
            <a href={`mailto:${profile.email}`} className="text-accent hover:underline">{profile.email}</a>
          </p>
          <p>{profile.location}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
          <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register('botcheck')} />
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" placeholder="Name" className={field} {...register('name')} />
              {err(errors.name?.message)}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" type="email" placeholder="Email" className={field} {...register('email')} />
              {err(errors.email?.message)}
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">Subject</label>
            <input id="subject" placeholder="Subject" className={field} {...register('subject')} />
            {err(errors.subject?.message)}
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" rows={6} placeholder="Message" className={field} {...register('message')} />
            {err(errors.message?.message)}
          </div>
          <button
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110 disabled:opacity-60"
          >
            <Send size={16} /> {isSubmitting ? 'Sending...' : 'Send message'}
          </button>
          <p aria-live="polite" className="text-sm">
            {status === 'sent' && <span className="text-ok">Message sent. Thanks, I will get back to you.</span>}
            {status === 'error' && <span className="text-red-400">Something went wrong. Please email me directly.</span>}
          </p>
        </form>
      </div>
    </Section>
  )
}
