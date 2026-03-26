import './AboutSection.scss'

import type { Strength } from '../../content/resumeData'

type AboutSectionProps = {
  strengths: Strength[]
}

export default function AboutSection({ strengths }: AboutSectionProps) {
  return (
    <section className="section about" id="about">
      <div className="about__intro">
        <div className="section-heading">
          <p className="eyebrow">Подход</p>
          <h2>Что я даю проекту и команде</h2>
        </div>

        <p className="about__lead">
          Для меня хороший интерфейс - это ясная логика, понятный путь
          пользователя и надёжная работа без лишнего шума.
        </p>
      </div>

      <div className="about__list">
        {strengths.map((item, index) => (
          <article className="about__item" key={item.title}>
            <span className="about__index">{`0${index + 1}`}</span>
            <div className="about__item-body">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
