import { Button } from "../Button/";
import "./style.scss";

export const Form = () => {
  return (
    <form className="new-task-form">
      <div className="input-container">
        <label htmlFor="task">Add a new task</label>
        <input
          type="text"
          name="task"
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
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button>Start</Button>
    </form>
  );
};
