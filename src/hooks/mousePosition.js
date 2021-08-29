import { useState, useEffect } from "react";
import { fromEvent } from "rxjs";
import { map, throttleTime } from "rxjs/operators";

function useMousePosition(time = 200) {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  useEffect(() => {
    const sub = fromEvent(document, "mousemove")
      .pipe(
        throttleTime(time),
        map((event) => [event.clientX, event.clientY])
      )
      .subscribe(([newX, newY]) => {
        setX(newX);
        setY(newY);
      });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return {
    mouseX: x,
    mouseY: y,
  };
}
export default useMousePosition;
