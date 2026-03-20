import './Topbar.scss'

export default function Topbar() {
  return (
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
  )
}

