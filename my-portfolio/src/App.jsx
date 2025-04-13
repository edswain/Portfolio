import React, { useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import profileImage from './assets/d2668ae6-b9a9-49a0-a41d-8b9f1dc27408.jpg'
import Contact from './components/Contact'
import Projects from './components/Projects'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './context/ThemeContext'
import './styles/theme.css'

function Home() {
  return (
    <div className="hero-content">
      <div className="hero-text">
        <h1 className="hero-title">Hi, I'm <span className="highlight">Edward Swain</span></h1>
        <h2 className="hero-subtitle">Junior Software Developer </h2>
        <p className="hero-description">
         Experienced in C# .Net using Entity Framework and Databases such as Microsoft SQL Server and PostgreSQL.
        </p>
        <div className="cta-buttons">
          <Link to="/projects" className="primary-btn">View My Work</Link>
          <Link to="/contact" className="secondary-btn">Contact Me</Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </div>
  )
}

function App() {
  useEffect(() => {
    // Initialize theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark'
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  return (
    <ThemeProvider>
      <Router>
        <div className="portfolio-container">
          <nav className="navbar">
            <div className="logo"></div>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <ThemeToggle />
          </nav>
          
          <Routes>
            <Route path="/" element={
              <header className="hero-section">
                <Home />
              </header>
            } />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
