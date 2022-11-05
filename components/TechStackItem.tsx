const TechStackItem = ({ name, type }: { name: string; type: string }) => {
  return (
    <div
      className={`shrink-none inline-block rounded-lg px-5 py-2 text-3xl lg:text-sm ${
        type == "dark" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {name}
    </div>
  );
};

export default TechStackItem;
