import { Button } from "../Button";
import { Clock } from "./Clock";

import "./style.scss";

export const Timer = () => {
  return (
    <div className="timer">
      <p className="title">Choose a card and start the timer</p>
      <div className="clockWrapper">
        <Clock />
      </div>
      <div>
        <Button>Start</Button>
      </div>
    </div>
  );
};
