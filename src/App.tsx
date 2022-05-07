import "./App.scss";
import React, { useState } from "react";
import { HexViewer } from "./components/HexViewer/HexViewer";

function App() {
  const [file, setFile] = useState<File>();
  const [buffer, setBuffer] = useState<ArrayBuffer>();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const buffer = await file.arrayBuffer();
      setBuffer(buffer);
    }
  };

  return (
    <div className="App">
      <div>
        <input type="file" onChange={handleChange} />
        <div className="status">
          bytes: {file?.size} lastModified: {file?.lastModified}
          lastModifiedDate: {new Date(
            file?.lastModified!
          ).toLocaleString()}{" "}
          type: {file?.type}
        </div>
      </div>
      <HexViewer groupLength={16} groupCount={4} children={buffer} />
    </div>
  );
}

export default App;
