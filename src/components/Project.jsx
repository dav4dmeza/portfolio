import HumaNET from "@/assets/images/humanet.webp";
import CodeIcon from "@/components/icons/CodeIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import PreviewIcon from "@/components/icons/PreviewIcon";
import { useState } from "react";

export default function Project() {
  const [projects] = useState([
    {
      description:
        "Sistema que ayuda a la gestión del capital humano. Creada desde cero con Angular y Laravel.",
      image: HumaNET,
      preview: "",
      repository: "",
      technologies: ["Angular", "Bootstrap", "Laravel", "SQL Server"],
      title: "HumaNET",
    },
  ]);

  return (
    <section className="container" id="proyectos">
      <h1 className="container__subtitle">
        <CodeIcon /> Proyectos
      </h1>
      <div className="card">
        {projects.map((project, index) => (
          <article className="card__item" key={index}>
            <img src={project.image} alt="screenshot" loading="lazy" />
            <strong className="card__item--title">{project.title}</strong>
            <div className="card__item--tags">
              {project.technologies.map((technologie, index) => (
                <span key={index}>{technologie}</span>
              ))}
            </div>
            <div className="card__item--description">{project.description}</div>
            <div className="card__item--links">
              {project.repository && (
                <a href={project.repository} target="_blank">
                  <GitHubIcon />
                </a>
              )}
              {project.preview && (
                <a href={project.preview} target="_blank">
                  <PreviewIcon />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
