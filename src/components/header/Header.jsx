import styles from '@/components/header/header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <a className={styles.nav__item} href="#Experiencia">
          Experiencia
        </a>
        <a className={styles.nav__item} href="#Proyectos">
          Proyectos
        </a>
        <a className={styles.nav__item} href="#Sobre_mí">
          Sobre mí
        </a>
        <a className={styles.nav__item} href="mailto:dav4dmeza@proton.me">
          Contacto
        </a>
      </nav>
    </header>
  )
}
