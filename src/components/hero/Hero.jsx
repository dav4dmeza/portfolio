import styles from '@/components/hero/hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.hero__title}>Hola 👋, soy David Meza</h1>
      <p className={styles.hero__description}>
        +4 años de experiencia.{' '}
        <strong className="color--primary">
          Desarrollador de Software Full Stack
        </strong>{' '}
        de nacionalidad mexicana 🇲🇽. Especializado en el desarrollo de
        aplicaciones web.
      </p>
    </section>
  )
}
