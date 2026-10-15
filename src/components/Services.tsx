import { services } from '../data/services'
import { Reveal } from './Reveal'

export function Services() {
  return (
    <section className="services" id="services">
      <Reveal origin="top">
        <h2 className="heading">
          <span>Speciality</span>
        </h2>
      </Reveal>

      <Reveal origin="bottom" className="services-container">
        {services.map((s) => (
          <div className="services-box" key={s.title}>
            <i className={`bx ${s.icon}`} />
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <a href={s.href} className="btn">
              Read More
            </a>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
