import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import hero from "/hero-image.jpg?url";
import usbPhoto from "/photos/usb.JPG?url";
import jaoyingPhoto from "/photos/jaoying.JPG?url";
import fbcPhoto from "/photos/fbc.JPG?url";
import friendsPhoto from "/photos/friends.JPG?url";
import buptPhoto from "/photos/bupt.jpg?url";
import tiantanPhoto from "/photos/tiantan.JPG?url";

const Home = () => {
  const journeyPreviews = [
    {
      id: 1,
      title: "Before China",
      preview:
        "The beginning of an incredible journey, preparing for a life-changing experience.",
      color: "var(--color-pink)",
    },
    {
      id: 2,
      title: "Study Life",
      preview: "Immersing myself in learning, culture, and new perspectives.",
      color: "var(--color-soft-blue)",
    },
    {
      id: 3,
      title: "Travel",
      preview:
        "Exploring beautiful places and creating unforgettable memories.",
      color: "var(--color-green)",
    },
    {
      id: 4,
      title: "Reflection",
      preview: "Looking back on the journey and all that I've learned.",
      color: "var(--color-yellow)",
    },
  ];

  const photoHighlights = [
    { id: 1, src: usbPhoto, alt: "Highlight 1" },
    { id: 2, src: jaoyingPhoto, alt: "Highlight 2" },
    { id: 3, src: fbcPhoto, alt: "Highlight 3" },
    { id: 4, src: friendsPhoto, alt: "Highlight 4" },
    { id: 5, src: buptPhoto, alt: "Highlight 5" },
    { id: 6, src: tiantanPhoto, alt: "Highlight 6" },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <img
            src={hero}
            alt="ODOS Summer Camp"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            ODOS Summer Camp
            <br />
            <span className="hero-subtitle">
              A Journey of Learning and Loving
            </span>
          </h1>
          <div className="hero-buttons">
            <Link to="/journey" className="btn btn-primary">
              Read My Journey
            </Link>
            <Link to="/about-odos" className="btn btn-secondary">
              About ODOS
            </Link>
          </div>
        </div>
      </section>

      {/* Journey Preview Section */}
      <section className="journey-preview-section">
        <div className="container">
          <h2 className="section-title">My Journey Highlights</h2>
          <p className="section-subtitle">
            Follow along as I share the chapters of my ODOS experience
          </p>
          <div className="journey-preview-grid">
            {journeyPreviews.map((item) => (
              <Link
                to={`/journey#section-${item.id}`}
                key={item.id}
                className="journey-card"
                style={{ "--card-color": item.color }}
              >
                <div className="journey-card-number">{item.id}</div>
                <h3 className="journey-card-title">{item.title}</h3>
                <p className="journey-card-preview">{item.preview}</p>
                <span className="journey-card-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Highlights Section */}
      <section className="photo-highlights-section">
        <div className="container">
          <h2 className="section-title">Photo Highlights</h2>
          <p className="section-subtitle">Captured moments from my journey</p>
          <div className="photo-grid">
            {photoHighlights.map((photo) => (
              <Link to="/gallery" key={photo.id} className="photo-card">
                <img src={photo.src} alt={photo.alt} className="photo-image" />
                <div className="photo-overlay">
                  <span>View Gallery</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="view-all-container">
            <Link to="/gallery" className="btn btn-outline">
              View All Photos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
