const Head = () => {
  const title = "Eduardo Serrano - Web Design and Development";
  const description = "I design, build and maintain web applications.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </>
  );
};

export default Head;
