import "../../List/style.scss";

interface IItemProps {
  task: string;
  time: string;
}

export const Item: React.FC<IItemProps> = ({ task, time }) => {
  return (
    <li className="item">
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
};
