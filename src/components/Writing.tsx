import { Link } from 'react-router-dom'
import { posts } from '../content/posts'
import { Reveal } from './Reveal'

export function Writing() {
  return (
    <section className="writing services" id="writing">
      <Reveal origin="top">
        <h2 className="heading">
          <span>Writing</span>
        </h2>
      </Reveal>
      <Reveal origin="bottom" className="services-container">
        {posts.map((p) => (
          <Link to={`/blog/${p.slug}`} className="services-box" key={p.slug}>
            <time>{p.date}</time>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <span className="btn">Read</span>
          </Link>
        ))}
      </Reveal>
    </section>
  )
}
