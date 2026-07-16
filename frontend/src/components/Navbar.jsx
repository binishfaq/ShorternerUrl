import React from 'react';
import { FaLink, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      marginBottom: '30px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <FaLink style={{ fontSize: '28px', color: '#667eea' }} />
        <span style={{
          fontSize: '24px',
          fontWeight: '800',
          color: 'white'
        }}>
          Short<span style={{ color: '#a78bfa' }}>Link</span>
        </span>
      </div>
      <a 
        href="https://github.com/binishfaq/ShorternerUrl" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '8px',
          color: 'white',
          textDecoration: 'none',
          fontSize: '14px',
          transition: 'all 0.3s'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.25)';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.15)';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        <FaGithub />
        <span>Star on GitHub</span>
      </a>
    </nav>
  );
};

export default Navbar;