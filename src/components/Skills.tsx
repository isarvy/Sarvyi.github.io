import { skillGroups, skillsExtra } from '../data/skills'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="icons-skills">
        <Reveal origin="top">
          <h2 className="heading">
            <span>Skills</span>
          </h2>
        </Reveal>
        <Reveal origin="bottom">
          {skillGroups.map((g) => (
            <div key={g.label}>
              <p>
                <u>{g.label} :</u> <br />
                <img
                  src={`https://skillicons.dev/icons?i=${g.icons}&theme=dark&perline=7`}
                  alt={`${g.label} skill icons`}
                  loading="lazy"
                />
              </p>
            </div>
          ))}
          <p className="skills-extra">{skillsExtra}</p>
        </Reveal>
      </div>
    </section>
  )
}
