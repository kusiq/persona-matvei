import './ExperienceSection.scss'

import type { Project } from '../../content/resumeData'

type ExperienceSectionProps = {
  projects: Project[]
}

export default function ExperienceSection({
  projects,
}: ExperienceSectionProps) {
  return (
    <section className="section experience" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Опыт</p>
        <h2>Где я был полезен</h2>
        <p>
          Работал в командах разного масштаба: от небольших составов до крупных
          корпоративных проектов с несколькими направлениями разработки.
        </p>
      </div>

      <div className="timeline">
        {projects.map((project) => (
          <article className="timeline__item" key={project.title}>
            <div className="timeline__period">{project.period}</div>
            <div className="timeline__body">
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <p className="timeline__stack">{project.stack.join(' · ')}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
