'use client'

import React from "react";
import { useDropzone } from 'react-dropzone';

const Dropzone = ({ onUpload }) => {
    const onDrop = (acceptedFiles) => {
        onUpload(acceptedFiles);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div className="p-20" {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="text-center"> Drag and drop files here, or click to select files.</p>
        </div>
    )
}

export default Dropzone;