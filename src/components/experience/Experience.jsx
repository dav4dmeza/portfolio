import styles from '@/components/experience/experience.module.css'

const EXPERIENCES = [
  {
    company: 'DISCOM Software Solutions',
    date: 'marzo 2023 - actualmente',
    description:
      'Desarrollo desde cero de aplicaciones web a la medida. Implementación de arquitectura de software y despliegue a producción en servidores IIS.',
    position: 'Desarrollador de Software Full Stack',
  },
  {
    company: 'Suministros Marinos e Industriales de México',
    date: 'abril 2022 - noviembre 2022',
    description:
      'Desarrollo desde cero de nuevos requerimientos y mejoras al sitio web.',
    position: 'Auxiliar de Desarrollo Web',
  },
  {
    company: 'Le Tech de México',
    date: 'junio 2021 - enero 2022',
    description:
      'Desarrollo de nuevas caracteristicas a la aplicación web y mejoras de la UI. Integración de pagos en línea con conekta. Desarrollo de una aplicación móvil para conteo de inventarios.',
    position: 'Programador',
  },
  {
    company: 'Distribución Internacional de Aislantes',
    date: 'octubre 2020 - marzo 2021',
    description:
      'Desarrollo desde cero de módulos faltantes a la aplicación web.',
    position: 'Programador',
  },
  {
    company: 'Castalv Innova Corp',
    date: 'abril 2020 - septiembre 2020',
    description: 'Mejoras de la UI del sitio web.',
    position: 'Programador',
  },
  {
    company: 'Consejo Zacatecano de Ciencia, Tecnología e Innovación',
    date: 'agosto 2019 - diciembre 2019',
    description:
      'Desarrollo de una aplicación móvil para la seguridad personal.',
    position: 'Programador',
  },
]

export default function Experience() {
  return (
    <section className={styles.experience} id="Experiencia">
      <h1 className={styles.experience__title}>Experiencia</h1>
      {EXPERIENCES.map((experience, index) => (
        <article className={styles.experience__item} key={index}>
          <span className={styles.square}></span>
          <h3 className="color--primary">{experience.position}</h3>
          <strong className={styles.item__description}>
            {experience.company}
          </strong>
          <p className={styles.item__description}>{experience.date}</p>
          <p className={styles.item__description}>{experience.description}</p>
        </article>
      ))}
    </section>
  )
}
