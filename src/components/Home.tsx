import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { Reveal } from './Reveal'

// Typed.js replacement: types and deletes each role in a loop.
function useTyped(words: string[]) {
  const [text, setText] = useState(words[0])
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let w = 0
    let i = 0
    let deleting = false
    let t: ReturnType<typeof setTimeout>
    const tick = () => {
      const word = words[w]
      i += deleting ? -1 : 1
      setText(word.slice(0, i))
      let delay = 100
      if (!deleting && i === word.length) {
        deleting = true
        delay = 1000
      } else if (deleting && i === 0) {
        deleting = false
        w = (w + 1) % words.length
      }
      t = setTimeout(tick, delay)
    }
    t = setTimeout(tick, 1000)
    return () => clearTimeout(t)
  }, [words])
  return text
}

const socials = [
  ['linkedin', 'bxl-linkedin', 'LinkedIn'],
  ['instagram', 'bxl-instagram-alt', 'Instagram'],
  ['twitter', 'bxl-twitter', 'Twitter'],
  ['github', 'bxl-github', 'GitHub'],
] as const

export function Home() {
  const typed = useTyped(profile.roles)
  return (
    <section className="home" id="home">
      <Reveal origin="top" className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Mr. {profile.name}</h1>
        <h3>
          And I'm a <span className="multiple-text">{typed}</span>
        </h3>
        <p>
          I am a DevOps &amp; Cloud Engineer from <br /> {profile.location}. I build and run multi-cloud
          platforms with Kubernetes, <br /> Terraform and GitOps, and I love solving real infrastructure
          problems. <br /> When I am not shipping pipelines you can find me binge watching anime.
        </p>
        <div className="social-media">
          {socials.map(([key, icon, label]) => (
            <a key={key} href={profile.links[key]} target="_blank" rel="noreferrer" aria-label={label}>
              <i className={`bx ${icon}`} />
            </a>
          ))}
        </div>
        <a href={profile.links.resume} target="_blank" rel="noreferrer" className="btn">
          Download CV
        </a>
      </Reveal>

      <Reveal origin="bottom" className="home-img">
        <img src="/images/home.jpg" alt="Sarvagya Singh" />
      </Reveal>
    </section>
  )
}
