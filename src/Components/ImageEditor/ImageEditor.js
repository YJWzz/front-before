import React, { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';

const ImageEditor = () => {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [previewImage, setPreviewImage] = useState(null);

  const editorRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScaleChange = (e) => {
    const newScale = parseFloat(e.target.value);
    setScale(newScale);
  };

  const handleCropComplete = () => {
    if (editorRef.current) {
      const croppedImage = editorRef.current.getImage().toDataURL();
      setPreviewImage(croppedImage);
    }
  };

  const handleUpload = () => {
    // 在這裡你可以將 previewImage 提交給伺服器或進行其他處理
    console.log('Upload:', previewImage);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {image && (
        <div>
          <h2>Image Preview</h2>
          <AvatarEditor
            ref={editorRef}
            image={image}
            width={250}
            height={250}
            scale={scale}
            onCropComplete={handleCropComplete}
          />
          <div>
            <label>Scale: </label>
            <input
              type="range"
              value={scale}
              min="0.1"
              max="1"
              step="0.01"
              onChange={handleScaleChange}
            />
          </div>
        </div>
      )}
      {previewImage && (
        <div>
          <h2>Preview</h2>
          <img
            src={previewImage}
            alt="Preview"
            style={{ width: '250px', height: '250px' }}
          />
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default ImageEditor;