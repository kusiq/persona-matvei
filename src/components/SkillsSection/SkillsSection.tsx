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
    <section className="section skills" id="skills">
      <div className="skills__heading">
        <div className="section-heading">
          <p className="eyebrow">Навыки</p>
          <h2>Что использую в работе</h2>
        </div>

        <p className="skills__lead">
          Сильнее всего чувствую себя во фронтенде, но думаю шире одного
          экрана: о данных, скорости, чистоте кода и нормальном взаимодействии
          внутри команды.
        </p>
      </div>

      <div className="skills__layout">
        <article className="skills__block">
          <h3>Основной стек</h3>
          <ul className="skills__grid" aria-label="Основной стек">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>

        <article className="skills__block skills__block--notes">
          <h3>Дополнительный опыт</h3>
          <ul className="skills__notes">
            {additionalExperienceBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
