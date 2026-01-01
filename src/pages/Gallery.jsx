import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      id: 1,
      src: "/gallery/photo1.jpg",
      caption: "The Great Wall at sunrise",
      category: "Travel",
    },
    {
      id: 2,
      src: "/gallery/photo2.jpg",
      caption: "Study session with friends",
      category: "Study Life",
    },
    {
      id: 3,
      src: "/gallery/photo3.jpg",
      caption: "Traditional tea ceremony",
      category: "Culture",
    },
    {
      id: 4,
      src: "/gallery/photo4.jpg",
      caption: "Mountain peak adventure",
      category: "Travel",
    },
    {
      id: 5,
      src: "/gallery/photo5.jpg",
      caption: "Calligraphy workshop",
      category: "Study Life",
    },
    {
      id: 6,
      src: "/gallery/photo6.jpg",
      caption: "Night market exploration",
      category: "Culture",
    },
    {
      id: 7,
      src: "/gallery/photo7.jpg",
      caption: "Campus life",
      category: "Study Life",
    },
    {
      id: 8,
      src: "/gallery/photo8.jpg",
      caption: "Ancient temple visit",
      category: "Travel",
    },
    {
      id: 9,
      src: "/gallery/photo9.jpg",
      caption: "Group photo memories",
      category: "Friends",
    },
    {
      id: 10,
      src: "/gallery/photo10.jpg",
      caption: "Local cuisine experience",
      category: "Culture",
    },
    {
      id: 11,
      src: "/gallery/photo11.jpg",
      caption: "Scenic landscape",
      category: "Travel",
    },
    {
      id: 12,
      src: "/gallery/photo12.jpg",
      caption: "Farewell celebration",
      category: "Friends",
    },
  ];

  const openLightbox = (photo) => {
    setSelectedImage(photo);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1 className="gallery-title">Gallery</h1>
        <p className="gallery-subtitle">
          Captured moments from my ODOS Summer Camp journey
        </p>
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-item"
              onClick={() => openLightbox(photo)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-category">{photo.category}</div>
                <div className="gallery-caption">{photo.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="lightbox-image"
            />
            <div className="lightbox-info">
              <div className="lightbox-category">{selectedImage.category}</div>
              <p className="lightbox-caption">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
