import { type FC, useState } from "react";
import { Set } from "./Set";

interface Props {
  sets: number[][];
  heading: string;
}

export const Row: FC<Props> = (props) => {
  const { sets, heading } = props;
  const [state, setState] = useState({ activeSet: -1, activeItem: -1 });

  const setActiveSet = (activeSet: number) => {
    if (sets[activeSet][state.activeItem] === -1) return;
    setState((state) => ({ ...state, activeSet }));
  };
  const clearActiveSet = () => {
    setState((state) => ({ ...state, activeSet: -1 }));
  };
  const setActiveItem = (activeItem: number) => {
    setState((state) => ({ ...state, activeItem }));
  };
  const clearActiveItem = () => {
    setState((state) => ({ ...state, activeItem: -1 }));
  };

  const setsNode = sets.map((set, i) => {
    return (
      <Set
        key={`set${i}`}
        set={set}
        index={i}
        active={state.activeSet === i}
        activeItem={state.activeItem}
        activateSet={setActiveSet}
        clearSet={clearActiveSet}
        activateItem={setActiveItem}
        clearItem={clearActiveItem}
      />
    );
  });

  const ascii = sets.map((set, setIndex) =>
    set.map((byte, itemIndex, theSet) => {
      let char = "·";
      if (byte > 31 && byte < 127) {
        char = String.fromCharCode(byte);
      }
      if (byte == -1) {
        char = " ";
      }

      const activeCell = state.activeSet * theSet.length + state.activeItem;
      const currentCell = setIndex * theSet.length + itemIndex;
      const classes = activeCell == currentCell ? "active" : "";

      return (
        <li key={`ascii${itemIndex}`} className={classes}>
          {char}
        </li>
      );
    })
  );

  return (
    <div className="hex-row">
      <div className="heading">{heading}:</div>
      <div className="hex">{setsNode}</div>
      <div className="ascii">
        <ul className="setAscii">{ascii}</ul>
      </div>
    </div>
  );
};
