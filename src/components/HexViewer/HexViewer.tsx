import { type FC } from 'react';
import { useHexViewer } from './useHexViewer';
import { Hex } from './Hex';
import { HexViewerProps } from './type';

export const HexViewer: FC<HexViewerProps> = (props) => {
  const { children, noData } = props;

  const { chunkedBuffer, rowLength } = useHexViewer(children);

  return (
    <>
      {!chunkedBuffer.length && (noData || <div>No Data</div>)}
      {!!chunkedBuffer.length && (
        <Hex rows={chunkedBuffer} bytesper={rowLength} />
      )}
    </>
  );
};
