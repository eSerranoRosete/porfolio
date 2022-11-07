const TechStack = ({ items, mode }: { items: string[]; mode: string }) => {
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {items.map((item) => (
        <li
          key={item}
          className={`shrink-none inline-block rounded-lg px-3 py-1 text-xs md:text-sm ${
            mode == "dark" ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default TechStack;
