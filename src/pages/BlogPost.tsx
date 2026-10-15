import Markdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import { posts } from '../content/posts'

export function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  return (
    <section className="post">
      <Link to="/#writing" className="back">
        <i className="bx bx-left-arrow-alt" /> Back
      </Link>
      {post ? (
        <article>
          <h1>{post.title}</h1>
          <time>{post.date}</time>
          <Markdown>{post.body}</Markdown>
        </article>
      ) : (
        <p style={{ marginTop: '3rem', fontSize: '1.6rem' }}>Post not found.</p>
      )}
    </section>
  )
}
