import type { FC } from "react";
import { Item } from "./Item";

interface Props {
  set: number[];
  index: number;
  active: boolean;
  activeItem: number;
  activateItem: (index: number) => void;
  clearItem: () => void;
  activateSet: (index: number) => void;
  clearSet: () => void;
}

export const Set: FC<Props> = (props) => {
  const {
    set,
    index,
    active,
    activeItem,
    activateItem,
    clearItem,
    activateSet,
    clearSet,
  } = props;

  const items = set.map((byte, i) => {
    let byteString = "--";

    if (byte !== -1) {
      byteString = byte.toString(16);

      if (byteString.length === 1) {
        byteString = `0${byteString}`;
      }
    }

    byteString = byteString.toUpperCase();

    return (
      <Item
        key={i}
        index={i}
        byte={byteString}
        active={activeItem === i && active}
        activate={activateItem}
        clear={clearItem}
      />
    );
  });

  return (
    <ul
      className={`setHex ${active ? "active" : ""}`}
      onMouseOver={() => activateSet(index)}
      onMouseLeave={clearSet}
    >
      {items}
    </ul>
  );
};
