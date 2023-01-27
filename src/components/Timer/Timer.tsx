import { Button } from "../Button";
import { Clock } from "./Clock";

export const Timer = () => {
  return (
    <div>
      <p>Choose a card and start the timer</p>
      <div>
        <Clock />
      </div>
      <div>
        <Button>Start</Button>
      </div>
    </div>
  );
};
