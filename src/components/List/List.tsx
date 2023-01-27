import { Item } from "./Item";
import "./style.scss";

export const List = () => {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Javascript",
      time: "01:00:00",
    },
    {
      task: "Typescript",
      time: "01:50:00",
    },
  ];

  return (
    <aside className="task-list">
      <h2> Today's tasks </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
};
