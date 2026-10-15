import { useState } from 'react'
import { certificates } from '../data/certificates'
import { Reveal } from './Reveal'

const INITIAL = 3

export function Certificates() {
  const [all, setAll] = useState(false)
  const shown = all ? certificates : certificates.slice(0, INITIAL)

  return (
    <section className="certificates" id="certificates">
      <Reveal origin="top">
        <h2 className="heading">
          <span>Certificates</span>
        </h2>
      </Reveal>
      <div className="services-container certificates-container" style={{ marginTop: '5rem' }}>
        {shown.map((c) => (
          <div className="services-box certificate" key={c.title}>
            {c.image ? <img src={c.image} alt={`${c.title} badge`} loading="lazy" /> : <i className={`bx ${c.icon}`} />}
            <h3>{c.title}</h3>
            <p className="issuer">{c.issuer}</p>
            <p>{c.description}</p>
            {c.link && (
              <a href={c.link} className="btn" target="_blank" rel="noreferrer">
                Credentials
              </a>
            )}
          </div>
        ))}
      </div>
      {!all && certificates.length > INITIAL && (
        <div className="more">
          <button className="btn" onClick={() => setAll(true)}>
            Show More
          </button>
        </div>
      )}
    </section>
  )
}
