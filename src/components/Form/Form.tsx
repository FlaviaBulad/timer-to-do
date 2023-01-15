import React from "react";
import { Button } from "../Button";

export class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="task">Add a new task</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="What do you want to do?"
          required
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="23:59:59"
          placeholder="What do you want to do?"
          required
        />
        <Button />
      </form>
    );
  }
}
