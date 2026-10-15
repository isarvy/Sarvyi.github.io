import { achievement, education } from '../data/education'
import { experience } from '../data/experience'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <>
      <section className="experience" id="experience">
        <Reveal origin="top">
          <h2 className="heading experience">
            <span>Experience</span>
          </h2>
        </Reveal>
        <div className="timeline">
          {experience.map((e) => (
            <Reveal origin="bottom" key={e.company + e.period}>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h2>{e.title}</h2>
                  <h3>
                    {e.company}
                    {e.location ? ` · ${e.location}` : ''}
                  </h3>
                  <ul>
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <span className="timeline-date">{e.period}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="education" id="education">
        <Reveal origin="top">
          <h2 className="heading education">Education</h2>
        </Reveal>
        <div className="timeline2">
          {education.map((e) => (
            <Reveal origin="bottom" key={e.degree}>
              <div className="timeline-item2">
                <div className="timeline-content2">
                  <h2>{e.degree}</h2>
                  <h3>{e.school}</h3>
                  <p>
                    {e.detail}
                    {e.detail && <br />}
                    <strong>{e.highlight}</strong>
                  </p>
                  <span className="timeline-date2">{e.period}</span>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal origin="bottom">
            <div className="timeline-item2">
              <div className="timeline-content2">
                <h2>Achievement</h2>
                <p>{achievement}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
