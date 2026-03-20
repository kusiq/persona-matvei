import './CtaSection.scss'

export default function CtaSection() {
  return (
    <section className="section cta">
      <div className="cta__content">
        <p className="eyebrow">Открыт к предложениям</p>
        <h2>
          Ищу сильные задачи, где важны польза, качество и нормальное
          человеческое общение.
        </h2>
        <p>
          Если вам нужен разработчик, который умеет писать код, слышать
          людей и доводить работу до спокойного результата, буду рад
          знакомству.
        </p>
      </div>

      <a className="button button--primary" href="rezume-matvey-k.pdf" download>
        Скачать резюме
      </a>
    </section>
  )
}

