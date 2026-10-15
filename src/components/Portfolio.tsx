import { useRef, useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { projects, type Project, type Tag } from '../data/projects'
import { Reveal } from './Reveal'

const filters: ('All' | Tag)[] = ['All', 'Cloud/DevOps', 'ML', 'Web', 'Mobile']

function Slide({ p }: { p: Project }) {
  const [open, setOpen] = useState(false) // tap-to-reveal on touch screens
  return (
    <div
      className={`project-slide ${open ? 'open' : ''}`}
      onClick={() => setOpen(!open)}
    >
      {p.image ? (
        <img src={p.image} alt={`${p.title} screenshot`} className="coverimg" />
      ) : (
        <div className="cover-fallback" aria-hidden>
          <i className="bx bx-cloud" />
          <span>{p.title}</span>
        </div>
      )}
      <div className="portfolio-layer">
        <h4>{p.title}</h4>
        <p>{p.description}</p>
        <p className="stack">{p.stack.join(' · ')}</p>
        <div className="links">
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.title} source code`} onClick={(e) => e.stopPropagation()}>
              <i className="bx bxl-github" />
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`} onClick={(e) => e.stopPropagation()}>
              <i className="bx bx-link-external" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  const [filter, setFilter] = useState<'All' | Tag>('All')
  const swiper = useRef<SwiperRef>(null)
  const shown = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <section className="portfolio" id="portfolio">
      <Reveal origin="top">
        <h2 className="heading">
          Latest <span>Project</span>
        </h2>
      </Reveal>

      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button key={f} className={`btn outline ${filter === f ? 'on' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className="btn1">
        <button id="btnid" className="btn" onClick={() => swiper.current?.swiper.slideNext()}>
          Scroll{' '}
          <span>
            <svg className="svgicon1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="rgba(0,0,0,1)" aria-hidden>
              <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
            </svg>
          </span>
        </button>
      </div>

      <Reveal origin="bottom">
        <Swiper
          key={filter}
          ref={swiper}
          className="project-swiper"
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000, pauseOnMouseEnter: true, disableOnInteraction: true }}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            700: { slidesPerView: 2, slidesPerGroup: 2 },
            1100: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
        >
          {shown.map((p) => (
            <SwiperSlide key={p.slug}>
              <Slide p={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  )
}
