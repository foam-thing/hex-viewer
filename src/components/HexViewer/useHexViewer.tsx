import { useMemo } from "react";
import { splitEvery } from "ramda";
import { BufferData, ChunkedBuffer, HexViewerProps, RawData } from "./type";

const getBufferData = (raw?: RawData): BufferData => {
  if (raw instanceof ArrayBuffer) {
    const typedArray = new Uint8Array(raw);
    return Array.from(typedArray.slice(0, 1024));
  }
  return [];
};

const getChunks = (
  bufferData: BufferData,
  rowLength: number,
  groupCount: number
): ChunkedBuffer => {
  return splitEvery(rowLength, bufferData).map((row) =>
    splitEvery(groupCount, row)
  );
};

export const useHexViewer = (rawData?: RawData, options?: HexViewerProps) => {
  const { groupLength = 4, groupCount = 4 } = options ?? {};

  const bufferData = useMemo(() => getBufferData(rawData), [rawData]);

  const rowLength = groupLength * groupCount;
  const chunkedBuffer = useMemo(
    () => getChunks(bufferData, rowLength, groupCount),
    [bufferData, rowLength, groupCount]
  );

  return {
    bufferData,
    chunkedBuffer,
    rowLength,
    setLength: groupLength,
  };
};
