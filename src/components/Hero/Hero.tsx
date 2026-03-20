import './Hero.scss'

type HeroProps = {
  quickFacts: string[]
  avatarSrc: string
}

export default function Hero({ quickFacts, avatarSrc }: HeroProps) {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="eyebrow">Фронтенд-разработчик</p>
        <h1>
          Делаю понятные, аккуратные и живые интерфейсы для людей и рабочих
          задач.
        </h1>
        <p className="hero__lead">
          Более 3 лет в ИТ. Основной профиль - разработка на React. Работал
          с корпоративными порталами, бизнес-платформами и сложной логикой:
          формулы, даты, координаты, формы и большие объёмы данных.
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
      </div>

      <div className="hero__media">
        <div className="hero__photo-card">
          <img
            className="hero__photo"
            src={avatarSrc}
            alt="Матвей на зимней улице"
          />
          <div className="hero__note hero__note--inside">
            <span className="hero__note-label">Подход к работе</span>
            <p>
              Спокойно беру ответственность, умею объяснять сложное простыми
              словами и люблю проекты, которые реально помогают людям.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

