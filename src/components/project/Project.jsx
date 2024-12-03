import HumaNET from '@/assets/images/humanet.webp'
import Link from '@/components/icons/Link'
import styles from '@/components/project/project.module.css'

const PROJECTS = [
  {
    description:
      'Sistema que ayuda a la gestión del capital humano. Creada desde cero con Angular y Laravel.',
    image: HumaNET,
    link: '',
    technologies: ['Angular', 'Bootstrap', 'Laravel', 'SQL Server'],
    title: 'HumaNET',
  },
]

export default function Project() {
  return (
    <section className={styles.project} id="Proyectos">
      <h1 className={styles.project__title}>Proyectos</h1>
      {PROJECTS.map((project, index) => (
        <article className={styles.project__item} key={index}>
          <img src={project.image} alt="screenshot" loading="lazy" />
          <div className={styles.item__title}>{project.title}</div>
          <div className={styles.item__description}>{project.description}</div>
          <div className={styles.item__tags}>
            {project.technologies.map((technologie, index) => (
              <span key={index}>{technologie}</span>
            ))}
          </div>
          <div className={styles.item__links}>
            {project.link && (
              <a href={project.link} target="_blank">
                <Link />
              </a>
            )}
          </div>
        </article>
      ))}
    </section>
  )
}
