'use client'

import React, {useCallback} from 'react'
import { useDropzone } from 'react-dropzone'

import Dropzone from '@/components/Dropzone'
  
const Upload = () => {
  const handleUpload = async (files: File[]) => {
    const file = files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/files/upload', {
        method: 'POST',
        body: formData
      });
    } catch (error) {
      console.error('Error uploading files', error);
    }
  }

  return (
    <Dropzone onUpload={handleUpload} />
  )
}

export default Upload;