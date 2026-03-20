import './AboutSection.scss'

import type { Strength } from '../../content/resumeData'

type AboutSectionProps = {
  strengths: Strength[]
}

export default function AboutSection({ strengths }: AboutSectionProps) {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        <p className="eyebrow">Обо мне</p>
        <h2>Чем могу быть полезен команде и проекту</h2>
        <p>
          Для меня хороший интерфейс - это не только красивый экран, а
          ясная логика, понятный путь пользователя и надёжная работа без
          лишнего шума.
        </p>
      </div>

      <div className="feature-grid">
        {strengths.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

