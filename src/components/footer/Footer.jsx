import styles from '@/components/footer/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__list}>
        <li className={styles.list__item}>
          <a
            className={styles['list__item--link']}
            href="mailto:dav4dmeza@proton.me"
          >
            Contacto
          </a>
        </li>
        <li className={styles.list__item}>
          <a
            className={styles['list__item--link']}
            href="https://github.com/dav4dmeza"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li className={styles.list__item}>
          <a
            className={styles['list__item--link']}
            href="https://linkedin.com/in/david-meza-61538133b"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  )
}
