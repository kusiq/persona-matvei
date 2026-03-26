import './Hero.scss'

type HeroProps = {
  quickFacts: string[]
  avatarSrc: string
}

export default function Hero({ quickFacts, avatarSrc }: HeroProps) {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="hero__role">Фронтенд-разработчик</p>
        <p className="hero__brand">Матвей К.</p>
        <h1>Понятные интерфейсы, спокойный код и аккуратная подача.</h1>
        <p className="hero__lead">
          Работаю с React и TypeScript, держу в порядке сложную логику и
          стараюсь делать продукты, в которых людям действительно удобно.
        </p>

        <div className="hero__actions">
          <a
            className="button button--primary"
            href="/rezume-matvey-k.pdf"
            download
          >
            Скачать резюме
          </a>
          <a className="button button--ghost" href="#experience">
            Посмотреть опыт
          </a>
        </div>

        <ul className="hero__facts" aria-label="Ключевые факты">
          {quickFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>

        <p className="hero__footnote">
          Спокойно беру ответственность, умею объяснять сложное простыми
          словами и люблю задачи, которые приносят реальную пользу.
        </p>
      </div>

      <div className="hero__media">
        <div className="hero__photo-frame">
          <img
            className="hero__photo"
            src={avatarSrc}
            alt="Матвей на зимней улице"
          />
        </div>
      </div>
    </section>
  )
}
