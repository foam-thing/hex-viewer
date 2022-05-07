import './App.scss';
import React, { useState } from 'react';
import { HexViewer } from './components/HexViewer/HexViewer';

function App() {
  const [file, setFile] = useState<File>();
  const [buffer, setBuffer] = useState<ArrayBuffer>();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileRef = e.target.files?.[0];
    if (fileRef) {
      setFile(fileRef);
      const fileBuffer = await fileRef.arrayBuffer();
      setBuffer(fileBuffer);
    }
  };

  return (
    <div className="App">
      <div>
        <input type="file" onChange={handleChange} />
        <div className="status">
          bytes:
          {' '}
          {file?.size}
          {' '}
          lastModified:
          {' '}
          {file?.lastModified}
          lastModifiedDate:
          {' '}
          {new Date(
            file?.lastModified!,
          ).toLocaleString()}
          {' '}
          type:
          {' '}
          {file?.type}
        </div>
      </div>
      <HexViewer groupLength={16} groupCount={4}>{buffer}</HexViewer>
    </div>
  );
}

export default App;
