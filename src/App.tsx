import avatar from './assets/avatar.jpg'
import './App.scss'

const quickFacts = [
  '3+ года в разработке',
  'React, TypeScript, SCSS',
  'Наставничество и ревью кода',
  'Нейросети, дизайн, видео',
]

const strengths = [
  {
    title: 'Понятные интерфейсы',
    text: 'Собираю страницы и формы так, чтобы в них было легко разобраться и сотруднику компании, и обычному пользователю.',
  },
  {
    title: 'Сложная логика без хаоса',
    text: 'Умею работать с формулами, датами, координатами, настройками и большими объёмами данных без перегруза для интерфейса.',
  },
  {
    title: 'Спокойная командная работа',
    text: 'Пишу аккуратный код, поддерживаю единый стиль проекта, делаю ревью и помогаю коллегам расти быстрее.',
  },
  {
    title: 'Внимание к пользе',
    text: 'Смотрю не только на код, но и на удобство для людей: обсуждаю решения с аналитиками и думаю о реальном результате.',
  },
]

const projects = [
  {
    period: '2025-2026',
    title: 'Система для работников медицины',
    text: 'Разрабатывал формы для сотрудников медицинских учреждений, помогал улучшать удобство работы и участвовал в обсуждении решений с аналитиками.',
    stack: ['JavaScript', 'PostgreSQL', 'Удобство', 'Формы'],
  },
  {
    period: '2023-2025',
    title: 'Настраиваемая диаграмма Ганта',
    text: 'Собирал самостоятельный компонент для задач и бизнес-процессов, занимался производительностью, виртуализацией, пагинацией и гибкой настройкой.',
    stack: ['React', 'TypeScript', 'SCSS', 'Redux Toolkit'],
  },
  {
    period: '2023',
    title: 'Система обучения сотрудников',
    text: 'Делал авторизацию, анимации, модальные окна, настраивал архитектуру проекта и общий стиль кода для команды.',
    stack: ['React', 'SCSS', 'TypeScript', 'Bootstrap'],
  },
  {
    period: '2022-2023',
    title: 'Платформа для автоматизации процессов',
    text: 'Разрабатывал формы, пагинацию, фильтры поиска и дорабатывал внутренний мониторинг в корпоративной системе.',
    stack: ['React', 'TypeScript', 'Material UI', 'HTML/CSS'],
  },
]

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'SCSS',
  'Redux Toolkit',
  'Material UI',
  'Bootstrap',
  'ESLint',
  'PostgreSQL',
  'Адаптивная вёрстка',
]

const extras = [
  {
    title: 'Нейросети в работе',
    text: 'Активно использую нейросети для поиска идей, быстрых набросков, упрощения рутинных задач и подготовки вариантов решений.',
  },
  {
    title: 'Дизайн и визуальная подача',
    text: 'Есть большой опыт в разработке дизайнов: люблю делать интерфейсы не только рабочими, но и визуально цельными.',
  },
  {
    title: 'Монтаж видео',
    text: 'Работал с видеомонтажом, поэтому хорошо чувствую ритм, подачу материала и внимание зрителя к деталям.',
  },
  {
    title: 'Общественные проекты',
    text: 'Есть опыт взаимодействия с общественными организациями и активная гражданская и жизненная позиция.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <div className="page-shell__glow page-shell__glow--left" />
      <div className="page-shell__glow page-shell__glow--right" />

      <header className="topbar">
        <a className="topbar__brand" href="#home">
          Матвей К.
        </a>
        <nav className="topbar__nav" aria-label="Разделы страницы">
          <a href="#about">Обо мне</a>
          <a href="#experience">Опыт</a>
          <a href="#skills">Навыки</a>
          <a href="#more">Дополнительно</a>
        </nav>
      </header>

      <main className="page">
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
                href="/rezume-matvey-k.docx"
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
                src={avatar}
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

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Опыт</p>
            <h2>Проекты, где я был полезен</h2>
            <p>
              Работал в командах разного масштаба: от небольших продуктовых
              составов до крупных корпоративных проектов с несколькими
              направлениями разработки.
            </p>
          </div>

          <div className="timeline">
            {projects.map((project) => (
              <article className="timeline__item" key={project.title}>
                <div className="timeline__period">{project.period}</div>
                <div className="timeline__body">
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <ul
                    className="tag-list"
                    aria-label={`Стек проекта ${project.title}`}
                  >
                    {project.stack.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

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
              <ul className="tag-list tag-list--wide" aria-label="Основной стек">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>

            <article className="card card--dense">
              <h3>Дополнительный опыт</h3>
              <ul className="plain-list">
                <li>Наставничество, лекции, собеседования и ревью кода.</li>
                <li>Документация, стайлгайды и поддержка порядка в проекте.</li>
                <li>Английский - уверенно, китайский - на базовом уровне.</li>
                <li>Обучение: GeekBrains и Компьютерная Академия TOP.</li>
              </ul>
            </article>
          </div>
        </section>

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

          <a
            className="button button--primary"
            href="/rezume-matvey-k.docx"
            download
          >
            Скачать резюме
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>
          Матвей К. · Фронтенд-разработка, дизайн, нейросети, визуальная подача
        </p>
      </footer>
    </div>
  )
}

export default App
