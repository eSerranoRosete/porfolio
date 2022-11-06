const Head = () => {
  const title = "Skills and Aptitudes - Eduardo Serrano";
  const description =
    "A full list of skills and technologies I am currently learning.";

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
