import type { FC } from "react";

interface Props {
  byte: string;
  index: number;
  active: boolean;
  activate(idx: number): void;
  clear(): void;
}

export const Item: FC<Props> = (props) => {
  const { byte, activate, index, active, clear } = props;

  const classes = (active ? "active" : "") + (byte === "--" ? " none" : "");

  return (
    <li
      className={classes}
      onMouseOver={() => activate(index)}
      onMouseLeave={clear}
    >
      {byte}
    </li>
  );
};
