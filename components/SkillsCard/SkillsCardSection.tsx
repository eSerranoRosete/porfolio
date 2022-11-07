export interface SkillsCardInterface {
  title: string;
  items: {
    type: string;
    percentage: number;
  }[];
}

const SkillsCardSection = ({ props }: { props: SkillsCardInterface }) => {
  return (
    <div className="md:self-end">
      <h6 className="text-lg text-zinc-400">{props.title}</h6>
      <ul>
        {props.items.map((item) => (
          <li key={item.type} className="text-4xl font-bold">
            {item.type}
            <span className="ml-2 text-sm text-emerald-500">
              {item.percentage}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCardSection;
