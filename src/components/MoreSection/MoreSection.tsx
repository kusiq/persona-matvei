import './MoreSection.scss'

import type { Extra } from '../../content/resumeData'

type MoreSectionProps = {
  extras: Extra[]
}

export default function MoreSection({ extras }: MoreSectionProps) {
  return (
    <section className="section more" id="more">
      <div className="more__intro">
        <div className="section-heading">
          <p className="eyebrow">Дополнительно</p>
          <h2>Что усиливает мою работу</h2>
        </div>

        <p className="more__lead">
          Помимо фронтенда, у меня есть опыт в направлениях, которые делают
          цифровой продукт сильнее, ближе к людям и выразительнее по подаче.
        </p>
      </div>

      <div className="more__grid">
        {extras.map((item) => (
          <article className="more__item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
