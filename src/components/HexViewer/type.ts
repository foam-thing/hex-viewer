import type { FC, ReactNode } from "react";

export type RawData = ArrayBuffer;
export type BufferData = number[];
export type ChunkedBuffer = BufferData[][];
export type GroupLength = number;
export type GroupCount = number;

export interface HexViewerProps {
  /** number of bytes between a visible split */
  groupLength?: GroupLength;
  /** number of set per row */
  groupCount?: GroupCount;
  /** ArrayBuffer */
  children?: ArrayBuffer;
  /** Component that will be displayed if there is no data */
  noData?: ReactNode;
  /** Component that will be displayed if data parsing is unsuccessful */
  errorData?: ReactNode;
}
