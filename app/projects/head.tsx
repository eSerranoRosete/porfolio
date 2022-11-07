const Head = () => {
  const title = "Proyectos Recientes - Eduardo Serrano";

  const description =
    "Hecha un vistazo a algunos de los proyectos en los que he trabajado.";

  const url = "https://edserrano.dev/projects";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </>
  );
};

export default Head;
