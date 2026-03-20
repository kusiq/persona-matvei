import './SkillsSection.scss'

type SkillsSectionProps = {
  skills: string[]
  additionalExperienceBullets: string[]
}

export default function SkillsSection({
  skills,
  additionalExperienceBullets,
}: SkillsSectionProps) {
  return (
    <section className="section section--split" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Навыки</p>
        <h2>Технологии и рабочие привычки</h2>
        <p>
          Сильнее всего чувствую себя во фронтенде, но думаю шире одного
          только экрана: о данных, скорости работы, чистоте кода и
          взаимодействии внутри команды.
        </p>
      </div>

      <div className="split-grid">
        <article className="card card--dense">
          <h3>Основной стек</h3>
          <ul
            className="tag-list tag-list--wide"
            aria-label="Основной стек"
          >
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>

        <article className="card card--dense">
          <h3>Дополнительный опыт</h3>
          <ul className="plain-list">
            {additionalExperienceBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

