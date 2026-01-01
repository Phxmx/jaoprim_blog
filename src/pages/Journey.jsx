import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Journey.css";

const Journey = () => {
  const navigate = useNavigate();

  const journeySections = [
    {
      id: 1,
      title: "Before China",
      date: "Preparation Phase",
      preview:
        "The excitement and nerves before embarking on this incredible journey.",
      icon: "🎒",
      color: "var(--color-pink)",
    },
    {
      id: 2,
      title: "Study Life",
      date: "Learning Experience",
      preview:
        "Diving deep into academics, culture, and making lifelong connections.",
      icon: "📚",
      color: "var(--color-soft-blue)",
    },
    {
      id: 3,
      title: "Travel",
      date: "Adventures",
      preview:
        "Exploring breathtaking destinations and experiencing new cultures.",
      icon: "✈️",
      color: "var(--color-green)",
    },
    {
      id: 4,
      title: "Reflection",
      date: "Looking Back",
      preview: "Thoughts on growth, learnings, and cherished memories.",
      icon: "💭",
      color: "var(--color-yellow)",
    },
  ];

  const handleCardClick = (id) => {
    navigate(`/journey/${id}`);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="journey-page">
      <div className="journey-header">
        <h1 className="journey-main-title">My เจอนี่ (Journey)</h1>
        <p className="journey-main-subtitle">
          A timeline of my ODOS Summer Camp experience
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {journeySections.map((section, index) => (
          <div
            key={section.id}
            id={`section-${section.id}`}
            className={`timeline-item ${
              index % 2 === 0 ? "timeline-item-left" : "timeline-item-right"
            }`}
          >
            <div
              className="timeline-content"
              onClick={() => handleCardClick(section.id)}
            >
              <div
                className="timeline-icon"
                style={{ background: section.color }}
              >
                <span>{section.icon}</span>
              </div>
              <div className="timeline-card">
                <div className="timeline-date">{section.date}</div>
                <h3 className="timeline-title" style={{ color: section.color }}>
                  {section.title}
                </h3>
                <p className="timeline-preview">{section.preview}</p>
                <button
                  className="timeline-read-more"
                  style={{ color: section.color }}
                >
                  Read Full Story →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
