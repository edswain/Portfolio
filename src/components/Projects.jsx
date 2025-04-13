import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// Import images with ?url suffix to get their public paths
import lockedInScreenshot from '../assets/LockedInScreenshot.PNG?url';
import lockedInScreenshot2 from '../assets/LockedInScreenshot2.PNG?url';

function ProjectGallery({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef(null);

  const handleScroll = () => {
    if (galleryRef.current) {
      const scrollPosition = galleryRef.current.scrollLeft;
      const imageWidth = galleryRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / imageWidth);
      setActiveIndex(newIndex);
    }
  };

  const scrollToImage = (index) => {
    if (galleryRef.current) {
      const imageWidth = galleryRef.current.clientWidth;
      galleryRef.current.scrollTo({
        left: index * imageWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="project-image-gallery">
      <div 
        className="image-gallery" 
        ref={galleryRef}
        onScroll={handleScroll}
      >
        {images.map((image, index) => (
          <div key={index} className="gallery-image">
            <img src={image} alt={`${title} - Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="image-gallery-nav">
        {images.map((_, index) => (
          <div 
            key={index} 
            className={`gallery-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => scrollToImage(index)}
          />
        ))}
      </div>
    </div>
  );
}

function Projects() {
  // Sample projects data - you can replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'LockedIn Discord Bot',
      description: 'Discord bot that notifies users when a token is locked on Solana. Rapid response times using a helius rpc node. Utilising websockets and written in javascript',
      technologies: ['Javascript', 'Discord.js', 'Helius API','BlockChain '],
      images: [
        lockedInScreenshot,
        lockedInScreenshot2
      ],
      link: '#'
    },
  ];

  return (
    <div className="projects-container">
    
      <h1>My Projects</h1>
      <p className="projects-intro">
        Here are some of the projects I've worked on. 
      </p>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            {project.images && project.images.length > 0 ? (
              <ProjectGallery images={project.images} title={project.title} />
            ) : (
              <div className="project-image">
                <img src={project.image || 'https://via.placeholder.com/600x400?text=No+Image'} alt={project.title} />
              </div>
            )}
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects; 