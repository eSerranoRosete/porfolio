const Head = () => {
  const title = "Habilidades - Eduardo Serrano";

  const description =
    "He estado aprendiendo muchas cosas ultimamente y me encanta.";

  const url = "https://edserrano.dev/skills";

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
