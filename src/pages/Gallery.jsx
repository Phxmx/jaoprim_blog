import React, { useState } from "react";
import "./Gallery.css";
import greatwall from "/gallery/greatwall.jpg?url";
import friends from "/gallery/friends.jpg?url";
import calligraphy from "/gallery/callighaphy.jpeg?url";
import view from "/gallery/view.JPG?url";
import nightMarket from "/gallery/night_market.JPG?url";
import temple from "/gallery/temple.JPG?url";
import farewell from "/gallery/farewell.jpg?url";
import food from "/gallery/Food1.jpeg?url";
import foodVid from "/gallery/Food2.mov?url";
import studyVid from "/gallery/study_with_friends.MOV?url";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      id: 1,
      src: greatwall,
      caption: "The Great Wall at sunrise",
      category: "Travel",
    },
    {
      id: 2,
      src: friends,
      caption: "Study session with friends",
      category: "Study Life",
    },
    {
      id: 3,
      src: calligraphy,
      caption: "Calligraphy workshop",
      category: "Culture",
    },
    {
      id: 4,
      src: view,
      caption: "Scenic landscape",
      category: "Travel",
    },
    {
      id: 5,
      src: nightMarket,
      caption: "Night market exploration",
      category: "Culture",
    },
    {
      id: 6,
      src: temple,
      caption: "Ancient temple visit",
      category: "Travel",
    },
    {
      id: 7,
      src: farewell,
      caption: "Farewell celebration",
      category: "Friends",
    },
    {
      id: 8,
      src: food,
      caption: "Local cuisine experience",
      category: "Culture",
    },
    {
      id: 9,
      src: foodVid,
      caption: "Delicious food moments",
      category: "Culture",
      type: "video",
    },
    {
      id: 10,
      src: studyVid,
      caption: "Studying with friends",
      category: "Study Life",
      type: "video",
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
              {photo.type === "video" ? (
                <video
                  src={photo.src}
                  className="gallery-image"
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="gallery-image"
                />
              )}
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
            {selectedImage.type === "video" ? (
              <video
                src={selectedImage.src}
                controls
                className="lightbox-image"
                autoPlay
              />
            ) : (
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="lightbox-image"
              />
            )}
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
