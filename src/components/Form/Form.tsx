import { useState } from "react";
import { Button } from "../Button/";
import "./style.scss";

export const Form = () => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task, time);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="task">Add a new task</label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          id="task"
          placeholder="What do you want to do?"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          id="time"
          min="00:00:00"
          required
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
};
