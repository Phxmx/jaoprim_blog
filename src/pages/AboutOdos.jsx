import React from "react";
import "./AboutOdos.css";

const AboutOdos = () => {
  return (
    <div className="about-odos-page">
      <div className="about-odos-container">
        <header className="about-odos-header">
          <div className="about-odos-icon">🌏</div>
          <h1 className="about-odos-title">About ODOS</h1>
          <p className="about-odos-subtitle">
            Office of Development Opportunities for Students
          </p>
        </header>

        <div className="about-odos-content">
          <section className="about-section">
            <h2>What is ODOS?</h2>
            <p>
              The Office of Development Opportunities for Students (ODOS) is a
              Thai government initiative dedicated to empowering students
              through international exchange programs, scholarships, and
              educational opportunities.
            </p>
            <p>
              ODOS believes in developing well-rounded global citizens who can
              contribute meaningfully to society while maintaining strong
              connections to their Thai heritage and values.
            </p>
          </section>

          <section className="about-section highlight-section">
            <h2>The ODOS Summer Camp Experience</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h3>Academic Excellence</h3>
                <p>
                  World-class education with renowned international institutions
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3>Cultural Exchange</h3>
                <p>Immerse yourself in diverse cultures and perspectives</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h3>Global Network</h3>
                <p>
                  Build lasting friendships with students from around the world
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Personal Growth</h3>
                <p>Develop leadership skills and discover your potential</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Program Benefits</h2>
            <ul className="benefits-list">
              <li>
                Fully funded scholarships covering tuition and living expenses
              </li>
              <li>Comprehensive language and cultural training</li>
              <li>Mentorship from experienced educators and professionals</li>
              <li>Opportunities for academic and personal development</li>
              <li>Support network throughout the program duration</li>
              <li>Certificate of completion from participating institutions</li>
            </ul>
          </section>

          <section className="about-section cta-section">
            <h2>Ready to Start Your Journey?</h2>
            <p className="cta-description">
              Visit the official ODOS website to learn more about available
              programs, application requirements, and upcoming opportunities.
            </p>
            <a
              href="https://odos.thaigov.go.th/"
              target="_blank"
              rel="noopener noreferrer"
              className="odos-link-button"
            >
              <span>Visit ODOS Official Website</span>
              <span className="arrow">→</span>
            </a>
          </section>

          <section className="about-section testimonial-section">
            <blockquote className="testimonial">
              <p>
                "The ODOS Summer Camp was a transformative experience that
                opened my eyes to new possibilities and helped me grow both
                academically and personally. I'm forever grateful for this
                opportunity."
              </p>
              <cite>— A participant's reflection</cite>
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutOdos;
