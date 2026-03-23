import { useEffect, useMemo, useState } from 'react'
import hostelLogo from './hostel-logo.png'
import './App.css'

function App() {
  const [activeSlide, setActiveSlide] = useState(0)

  const heroSlides = useMemo(
    () => [
      {
        image:
          'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1600&q=80',
        alt: 'Comfortable and modern girls hostel room',
      },
      {
        image:
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
        alt: 'Clean and bright hostel interior',
      },
      {
        image:
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1600&q=80',
        alt: 'Spacious and peaceful common area',
      },
    ],
    [],
  )

  const facilities = [
    { title: 'Female Staff', detail: 'Dedicated women staff for better comfort and care.' },
    { title: 'High Speed Internet', detail: 'Reliable high-speed internet for studies and work.' },
    { title: 'Homely Environment', detail: 'Peaceful and friendly atmosphere like home.' },
    { title: 'CCTV Surveillance', detail: '24/7 security monitoring in key areas.' },
    { title: 'Laundry Service', detail: 'Regular laundry support for residents.' },
    { title: '24/7 Electricity Backup', detail: 'Uninterrupted power backup service.' },
  ]

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [heroSlides.length])

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="page">
      <nav className="navbar">
        <a className="brand" href="#home">
          <img src={hostelLogo} alt="Subidha Hostel logo" className="logo-image" />
          <span className="brand-text">Subidha Girl&apos;s Hostel</span>
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </div>
      </nav>

      <main>
        <section id="home" className="section home-section">
          <div className="hero-card">
            <div className="hero-overlay">
              <div className="hero-brand">
                <img src={hostelLogo} alt="Subidha Hostel logo" className="logo-image hero-logo-image" />
                <span>Subidha Girl&apos;s Hostel</span>
              </div>
              <h1>Shiksha, Suraksha ra Samman - Hamro Pahichan</h1>
              <button type="button" className="primary-btn" onClick={handleContactClick}>
                Contact Us
              </button>
            </div>
            <div className="hero-slider">
              {heroSlides.map((slide, index) => (
                <img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.alt}
                  className={`hero-image ${index === activeSlide ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-header">
            <h2>About Us</h2>
            <p>
              Subidha Girl&apos;s Hostel, Tintoliya Santi Chowk (Biratnagar-10), offers
              a secure and homely space for girls with trusted staff and modern
              facilities focused on study, comfort, and safety.
            </p>
          </div>
          <div className="facility-grid">
            {facilities.map((facility) => (
              <article key={facility.title} className="facility-card">
                <h3>{facility.title}</h3>
                <p>{facility.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>Reach out for admissions, room availability, and hostel visits.</p>
          </div>
          <div className="map-wrap">
            <iframe
              title="Subidha Girls Hostel Location"
              src="https://www.google.com/maps?q=26.4478847492391,87.28677239261431&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-title">Contact Details</p>
          <p className="footer-text">Usha Ray</p>
            <a className="footer-link" href="mailto:subidhahostel@gmail.com"><p className="footer-text">subidhahostel@gmail.com</p></a>
            <a className="footer-link" href="tel:9852030067, 9807011200"><p className="footer-text">9852030067, 9807011200</p></a>
         <p className="footer-text">Tintoliya Santi Chowk, Biratnagar-10</p>
          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=61578713306133"
              target="_blank"
              rel="noreferrer"
            >
              Facebook Page
            </a>
            <a
              href="https://www.tiktok.com/@subidhahostel"
              target="_blank"
              rel="noreferrer"
            >
              TikTok Page
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
