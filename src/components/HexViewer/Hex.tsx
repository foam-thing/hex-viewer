import type { FC } from "react";
import { Row } from "./Row";

interface Props {
  rows: number[][][];
  bytesper: number;
}

export const Hex: FC<Props> = (props) => {
  const { rows, bytesper } = props;

  const pad = "000000";

  const rowsNode = rows.map((row, i) => {
    let heading = `${i * bytesper}`;
    heading = pad.substring(0, pad.length - heading.length) + heading;
    return <Row key={`row${i}`} sets={row} heading={heading} />;
  });

  return (
    <div className="hexviewer">
      <div className="hex">{rowsNode}</div>
    </div>
  );
};
