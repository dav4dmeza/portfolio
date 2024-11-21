import UserIcon from "@/components/icons/UserIcon";

export default function AboutMe() {
  return (
    <section className="container" id="sobre-mi">
      <h1 className="container__subtitle">
        <UserIcon /> Sobre mí
      </h1>
      <p className="container__description">
        Me llamo David Meza. Soy{" "}
        <span className="color--primary">ingeniero</span> en{" "}
        <span className="color--primary">
          Tecnologías de la Información y Comunicaciones
        </span>
        , con un diplomado en la especialidad de{" "}
        <span className="color--primary">Informática</span>.
      </p>
    </section>
  );
}
