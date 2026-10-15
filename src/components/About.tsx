import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="about" id="about">
      <Reveal origin="left" className="about-img">
        <img src="/images/aboutme.jpg" alt="About Sarvagya" loading="lazy" />
      </Reveal>

      <Reveal origin="right" className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Why you should hire me ? </h3>
        <p>
          I am a DevOps &amp; Cloud Engineer with 2 years of enterprise experience across AWS and GCP. I
          have built an internal developer platform for 300+ microservices, led large AWS to GCP and
          Jenkins to GitHub Actions migrations, and enforce DevSecOps guardrails with policy-as-code.
          I hold a BTech in CSE (Data Science) and enjoy bringing that data and ML background to
          infrastructure problems. Based in Mumbai, India.
        </p>
        <br />
        <h2 className="heading">Hobbies</h2>
        <p>Anime | Tech | Volleyball | Gym | Art</p>
      </Reveal>
    </section>
  )
}
