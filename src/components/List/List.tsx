import { useState } from "react";
import { Item } from "./Item";
import "./style.scss";

interface ITask {
  task: string;
  time: string;
}

export const List = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <aside className="task-list">
      <h2
        onClick={() => {
          setTasks([...tasks]);
        }}
      >
        Today's tasks
      </h2>
      <ul>
        {tasks.map((item) => (
          <Item key={item.task} {...item} />
        ))}
      </ul>
    </aside>
  );
};
