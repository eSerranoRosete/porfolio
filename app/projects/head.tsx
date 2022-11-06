const Head = () => {
  const title = "Latest Projects - Eduardo Serrano";
  const description = "Explore my latest web design and development projects ";
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
