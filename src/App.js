import React, { useState } from 'react';
import Dropzone from 'react-dropzone'

function Example() {
  const [files, setFiles] = useState([]);

  return (
    <div>
      <div role='alert'>{files.length}</div>
      <Dropzone onDrop={acceptedFiles => setFiles(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <label htmlFor='upload'>Upload files</label>
          <input {...getInputProps({id: 'upload'})} />
        </div>
      )}
    </Dropzone>
    </div>
  );
}

export default Example;
