'use client'

import React from "react";
import { useDropzone } from 'react-dropzone';

interface DropzoneCallbackProps {
    onUpload: (files: File[]) => Promise<void>;
}

const Dropzone = ({ onUpload }: DropzoneCallbackProps) => {
    const onDrop = (acceptedFiles: File[]) => {
        onUpload(acceptedFiles);
    };

    const { getRootProps, getInputProps } = useDropzone({ 
        onDrop,
        accept: {
            'audio/*': ['.mp3', '.wav'],
        }
     });

    return (
        <div className="pt-20" {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="text-lg font-bold text-center"> Drag and drop files here, or click to select files.</p>
        </div>
    )
}

export default Dropzone;