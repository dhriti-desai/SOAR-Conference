import React, { useState } from 'react';
import './App.css';
import stadiumImage from './7R206927.webp';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  const photos = [
    { id: 1, title: 'SOAR 2024 Opening Ceremony' },
    { id: 2, title: 'Student Presentations 2024' },
    { id: 3, title: 'Networking Session 2023' },
    { id: 4, title: 'Awards Ceremony 2023' },
    { id: 5, title: 'Research Poster Session 2022' },
    { id: 6, title: 'Keynote Speaker 2022' }
  ];
  
  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };
  
  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'registration', label: 'Register' },
    { id: 'contact', label: 'Contact' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="home-page">
            <div className="stadium-hero">
              <div className="stadium-image" style={{backgroundImage: `url(${stadiumImage})`}}></div>
              <div className="crowd-layer"></div>
              <div className="light left-light"></div>
              <div className="light right-light"></div>
              <div className="light-beam beam-left"></div>
              <div className="light-beam beam-right"></div>
              <div className="particles"></div>
              <div className="flicker-overlay"></div>
              
              <div className="hero-content">
                <p className="introducing-text">introducing</p>
                <h1 className="hero-title cinematic-reveal">SOARCUP</h1>
              </div>
              
              <div className="crowd-audio-visual">
                <div className="sound-wave wave-1"></div>
                <div className="sound-wave wave-2"></div>
                <div className="sound-wave wave-3"></div>
              </div>
            </div>
            
            <div className="content-wrapper">
              <div className="photo-gallery">
                <h2>Past Conference Highlights</h2>
                <div className="carousel-container">
                  <button className="carousel-btn prev" onClick={prevPhoto}>
                    ‹
                  </button>
                  
                  <div className="photo-display">
                    <div className="photo-placeholder main-photo">
                    </div>
                  </div>
                  
                  <button className="carousel-btn next" onClick={nextPhoto}>
                    ›
                  </button>
                </div>
                
                <div className="photo-dots">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${currentPhoto === index ? 'active' : ''}`}
                      onClick={() => setCurrentPhoto(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="page-wrapper">
            <div className="page-header">
              <h1>About SOAR</h1>
            </div>
            <div className="page-content">
              <p>Content coming soon...</p>
            </div>
          </div>
        );

      case 'speakers':
        return (
          <div className="page-wrapper">
            <div className="page-header">
              <h1>Speakers</h1>
            </div>
            <div className="page-content">
              <p>Content coming soon...</p>
            </div>
          </div>
        );

      case 'schedule':
        return (
          <div className="page-wrapper">
            <div className="page-header">
              <h1>Schedule</h1>
            </div>
            <div className="page-content">
              <p>Content coming soon...</p>
            </div>
          </div>
        );

      case 'registration':
        return (
          <div className="page-wrapper">
            <div className="page-header">
              <h1>Registration</h1>
            </div>
            <div className="page-content">
              <p>Content coming soon...</p>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="page-wrapper">
            <div className="page-header">
              <h1>Contact Us</h1>
            </div>
            <div className="page-content">
              <div className="contact-form">
                <h3>Send a Message</h3>
                <form>
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <input type="text" placeholder="University/Institution" />
                  <select>
                    <option>General Question</option>
                    <option>Registration Help</option>
                    <option>Abstract Submission</option>
                    <option>Sponsorship Inquiry</option>
                    <option>Volunteer Opportunity</option>
                  </select>
                  <textarea placeholder="Your Question" rows="4" required></textarea>
                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <h1>SOAR Conference</h1>
          </div>
          <nav className="nav">
            {tabs.map(tab => (
              <div key={tab.id} className="nav-item">
                <button
                  className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
                  data-register={tab.id === 'registration' ? 'true' : 'false'}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
                {tab.id === 'about' && (
                  <div className="dropdown-menu">
                    <a href="#mission" onClick={(e) => {e.preventDefault(); setActiveTab('about'); document.querySelector('.mission-section')?.scrollIntoView();}}>Mission</a>
                    <a href="#history" onClick={(e) => {e.preventDefault(); setActiveTab('about'); document.querySelector('.soar-history')?.scrollIntoView();}}>History</a>
                    <a href="#faqs" onClick={(e) => {e.preventDefault(); setActiveTab('about'); document.querySelector('.faqs')?.scrollIntoView();}}>FAQs</a>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>
      <main className="main-content">
        {renderContent()}
      </main>
      <footer className="footer">
        <p>&copy; 2026 SOAR Conference. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;