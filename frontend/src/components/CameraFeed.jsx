import React, { useEffect, useRef, useState } from 'react';

const CameraFeed = ({ isActive, onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [poseName, setPoseName] = useState('');

  useEffect(() => {
    if (isActive) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => stopCamera();
  }, [isActive]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 1280, height: 720 } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
  };

  const captureImage = async () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageDataUrl = canvas.toDataURL('image/jpeg');
      const newImage = {
        id: Date.now(),
        dataUrl: imageDataUrl,
        timestamp: new Date().toLocaleTimeString()
      };

      setCapturedImage(newImage);
      if (onCapture) onCapture(newImage);

      await uploadImage(imageDataUrl);
    }
  };

  const uploadImage = async (dataUrl) => {
    try {
      setUploadStatus('Uploading...');
      setPoseName('');

      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], `captured-${Date.now()}.jpg`, {
        type: 'image/jpeg',
      });

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:8000/upload-image', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setUploadStatus('Upload successful!');
        setPoseName(result.Pose_Name || 'Pose not detected');
        console.log("Upload response:", result);
      } else {
        setUploadStatus(`Upload failed: ${result.detail || 'Unknown error'}`);
      }
    } catch (error) {
      setUploadStatus(`Upload error: ${error.message}`);
    }
  };

  return (
    <div className="camera-feed">
      <div className="camera-preview">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted
          className={`video-element ${isActive ? 'active' : 'inactive'}`}
        />
        <canvas 
          ref={canvasRef} 
          style={{ display: 'none' }}
        />
      </div>

      {isActive && (
        <div className="capture-controls">
          <button onClick={captureImage} className="capture-btn">
            Capture Image
          </button>
        </div>
      )}

      {capturedImage && (
        <div className="captured-image">
          <h3>Captured Image:</h3>
          <img 
            src={capturedImage.dataUrl} 
            alt={`Captured at ${capturedImage.timestamp}`} 
            style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '10px' }}
          />
          <p>{capturedImage.timestamp}</p>
        </div>
      )}

      {uploadStatus && (
        <div className="upload-status" style={{ marginTop: '15px' }}>
          <strong>Status:</strong> {uploadStatus}
        </div>
      )}

      {poseName && (
        <div className="pose-result" style={{ marginTop: '10px' }}>
          <strong>Detected Pose:</strong> <code>{poseName}</code>
        </div>
      )}
    </div>
  );
};

export default CameraFeed;