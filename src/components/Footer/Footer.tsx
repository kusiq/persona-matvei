import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__meta">
        <p>
          Матвей К. · Фронтенд-разработка, дизайн, нейросети, визуальная
          подача
        </p>
      </div>

      <div className="footer__links" aria-label="Контакты в подвале">
        <a href="https://t.me/mkuskov" target="_blank" rel="noreferrer">
          Telegram
        </a>
        <a href="mailto:matveykuskov@gmail.com">Email</a>
        <a href="https://vk.ru/mkuskoff" target="_blank" rel="noreferrer">
          VK
        </a>
      </div>
    </footer>
  )
}
