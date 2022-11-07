const Head = () => {
  const title = "Eduardo Serrano - Diseño y Desarrollo Web";

  const description =
    "Diseño, Construyo y Mantengo Aplicaciones Web. Visita mi Portafolio";

  const url = "https://edserrano.dev";

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
