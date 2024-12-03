import styles from '@/components/about/about.module.css'

export default function About() {
  return (
    <section className={styles.about} id="Sobre_mí">
      <h1 className={styles.about__title}>Sobre mí</h1>
      <p className={styles.about__description}>
        Soy <span className="color--primary">ingeniero</span> en{' '}
        <span className="color--primary">
          Tecnologías de la Información y Comunicaciones
        </span>
        , además, cuento con un diplomado en la especialidad de{' '}
        <span className="color--primary">Informática</span> por el instituto de
        capacitación para el trabajo del estado de Veracruz.
      </p>
      <p className={styles.about__description}>
        Me enfoqué por el lado de la programación, y mi objetvo es crear
        soluciones de software de alta calidad.
      </p>
      <p className={styles.about__description}>
        javascript | typescript | php | html | css | react | angular | node.js |
        laravel | bootstrap | sql server | mysql | git | rest api | npm |
        composer
      </p>
    </section>
  )
}
