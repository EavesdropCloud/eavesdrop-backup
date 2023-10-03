'use client'

import Dropzone from '@/components/Dropzone'
import { api_proxy } from '@/config';
import { useState } from 'react'

  
const Upload = () => {
  const [message, setMessage] = useState<string>('');
  const handleUpload = async (files: File[]) => {
    files.forEach( async file =>  {
      const formData = new FormData();
      formData.append('file', file);
  
      setMessage(`Uploading files...`);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const res = await fetch(api_proxy + '/api/files/upload', {
          method: 'POST',
          body: formData
        }).then(res => {
          setMessage("Files uploaded! Check your song library, or upload more.");
        });
      } catch (error) {
        console.error('Error uploading file.', error);
        setMessage('Error uploading files.');
      }
    });

  }

  return (
    <main>
      <Dropzone onUpload={handleUpload} />
      {message && <div className='px-20 pt-10 text-sm opacity-50 text-center'>{message}</div>}
    </main>
  )
}

export default Upload;