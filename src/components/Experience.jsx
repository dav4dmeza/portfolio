import BriefcaseIcon from "@/components/icons/BriefcaseIcon";
import { useState } from "react";

export default function Experience() {
  const [experiences] = useState([
    {
      company: "DISCOM Software Solutions",
      date: "marzo 2023 - actualmente",
      description:
        "Desarrollo desde cero de aplicaciones web a la medida. Implementación de arquitectura de software y despliegue en servidores IIS.",
      position: "Desarrollador de Software Full Stack",
    },
    {
      company: "Suministros Marinos e Industriales de México",
      date: "abril 2022 - noviembre 2022",
      description: "Desarrollo de nuevos requerimientos a la aplicación web.",
      position: "Auxiliar de Desarrollo Web",
    },
    {
      company: "Le Tech de México",
      date: "junio 2021 - enero 2022",
      description:
        "Desarrollo de nuevas caracteristicas al sitio web y mejoras de la UI. Integración de pagos en línea con conekta. Desarrollo de una aplicación móvil para conteo de inventarios.",
      position: "Programador",
    },
    {
      company: "Distribución Internacional de Aislantes",
      date: "octubre 2020 - marzo 2021",
      description:
        "Desarrollo desde cero de módulos faltantes a la aplicación web.",
      position: "Programador",
    },
    {
      company: "Castalv Innova Corp",
      date: "abril 2020 - septiembre 2020",
      description:
        "Mejoras de la UI del sitio web. Desarrollo de una aplicación móvil para publicar servicios.",
      position: "Programador",
    },
    {
      company: "Consejo Zacatecano de Ciencia, Tecnología e Innovación",
      date: "agosto 2019 - diciembre 2019",
      description:
        "Desarrollo de una aplicación móvil para la seguridad personal.",
      position: "Programador",
    },
  ]);

  return (
    <section className="container" id="experiencia">
      <h1 className="container__subtitle">
        <BriefcaseIcon /> Experiencia
      </h1>
      {experiences.map((experience, index) => (
        <article className="experience__item" key={index}>
          <div>
            <span className="square" />
            <strong className="container__description color--primary">
              {experience.position}
            </strong>
            <strong>{experience.company}</strong>
            <p>{experience.date}</p>
          </div>
          <div>
            <p className="container__description">{experience.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
