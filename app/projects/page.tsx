import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import ProjectCard, {
  ProjectCardInterface,
} from "../../components/ProjectCard";

const Projects = () => {
  const projects: ProjectCardInterface[] = [
    {
      title: "Tarjetas de Presentación Digital",
      p1: "Aplicación web para crear tarjetas de presentación digitales con más de 300 usuarios. Obtiene datos de usuario de una REST API construida con express y con capacidades de almacenamiento de archivos de usuario en S3.",
      techStack: ["Express", "MongoDB", "NodeJS", "React", "Tailwindcss"],
      livePreview: "https://inteminer.vercel.app/6318075e2146d942018ce831",
      img: "/dbcards-project.png",
      mode: "dark",
    },
    {
      title: "Modular Saas",
      p1: "Version 2.0 de tarjetas de presentación digital auto-gestionables. Autenticación, almacenamiento de archivos, envío de emails, y más. Construida con NextJS y Tailwindcss.",
      techStack: ["Next13", "Tailwind", "NextAuth", "Firebase", "Typescript"],
      livePreview: "https://modular-saas.vercel.app/",
      img: "/mac.png",
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
  ];

  return (
    <div>
      <Hero>
        <h1 className="mb-10">
          Hecha un vistazo a algunos de los{" "}
          <i className="font-thin text-emerald-500">proyectos</i> en los que he
          trabajado.
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
