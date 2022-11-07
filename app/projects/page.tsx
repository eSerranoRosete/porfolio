import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import ProjectCard, {
  ProjectCardInterface,
} from "../../components/ProjectCard";

const Projects = () => {
  const projects: ProjectCardInterface[] = [
    {
      title: "Tarjetas de Presentación Digital",
      p1: "Aplicación web para crear tarjetas de presentación digitales con más de 100 usuarios. Obtiene datos de usuario de una REST API construida con express y con capacidades de almacenamiento de archivos de usuario en S3.",
      techStack: ["Express", "MongoDB", "NodeJS", "React", "Tailwindcss"],
      livePreview: "https://inteminer.vercel.app/6318075e2146d942018ce831",
      img: "/dbcards-project.png",
      mode: "dark",
    },
    {
      title: "Cotizador de Terrenos",
      p1: "Aplicación utilizada por +75 asesores como medio de captación de clientes. La aplicación te permite calcular el precio de un terreno así como los pagos mensuales. El asesor recibe una notificación por email cuando algún cliente utiliza el cotizador.",
      techStack: ["Express", "NodeJS", "EJS", "Tailwindcss"],
      livePreview:
        "https://cotizador.inteminer.com/cliente/6351ebc0b83b047c5dff0b88",
      img: "/quoter-project.png",
      mode: "light",
    },
    {
      title: "Segday.mx",
      p1: "Sitio web estático diseñado y construido para una compañía integradora de sistemas de seguridad.",
      p2: "Diseño de logo y sitio web responsibo utilizando sistema de diseño Tailwindcss.",
      techStack: ["Astro", "React", "Tailwindcss"],
      livePreview: "https://segday.mx/",
      img: "/segday-project.png",
      mode: "dark",
    },
  ];

  return (
    <div>
      <Hero>
        <h1 className="mb-10">
          Hecha un vistazo a algunos de los proyectos{" "}
          <i className="font-thin opacity-30">en los que he trabajado.</i>
        </h1>
      </Hero>
      <main className="bg-zinc-200 py-32">
        <div className="container m-auto grid max-w-4xl grid-cols-1 gap-10 px-5 ">
          {projects.map((project) => (
            <ProjectCard data={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
