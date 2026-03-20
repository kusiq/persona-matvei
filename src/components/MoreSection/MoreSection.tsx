import './MoreSection.scss'

import type { Extra } from '../../content/resumeData'

type MoreSectionProps = {
  extras: Extra[]
}

export default function MoreSection({ extras }: MoreSectionProps) {
  return (
    <section className="section" id="more">
      <div className="section-heading">
        <p className="eyebrow">Дополнительно</p>
        <h2>Не только код</h2>
        <p>
          Помимо фронтенда, у меня есть опыт в направлениях, которые делают
          цифровой продукт сильнее и ближе к людям.
        </p>
      </div>

      <div className="feature-grid feature-grid--compact">
        {extras.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

