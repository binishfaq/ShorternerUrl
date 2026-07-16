import React from 'react';
import { FaLink } from 'react-icons/fa';
import UrlCard from './UrlCard';

const UrlList = ({ urls, loading, onDelete }) => {
  if (loading && urls.length === 0) {
    return (
      <div style={{ width: '100%' }}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '16px',
            padding: '20px 24px',
            marginBottom: '12px',
            animation: 'pulse 1.5s ease-in-out infinite'
          }}>
            <div style={{
              height: '20px',
              background: '#e5e7eb',
              borderRadius: '8px',
              marginBottom: '8px'
            }}></div>
            <div style={{
              height: '20px',
              background: '#e5e7eb',
              borderRadius: '8px',
              width: '60%'
            }}></div>
          </div>
        ))}
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </div>
    );
  }

  if (urls.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '60px 20px',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)'
      }}>
        <FaLink style={{
          fontSize: '48px',
          color: '#d1d5db',
          marginBottom: '16px'
        }} />
        <h3 style={{
          color: '#1a1a2e',
          fontSize: '20px',
          marginBottom: '8px'
        }}>
          No URLs shortened yet
        </h3>
        <p style={{
          color: '#6b7280',
          fontSize: '16px'
        }}>
          Paste a long URL above and click "Shorten URL"
        </p>
      </div>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
        padding: '0 4px'
      }}>
        <h3 style={{
          color: 'white',
          fontSize: '18px',
          fontWeight: '600'
        }}>
          📊 Your Shortened URLs
        </h3>
        <span style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '14px',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '4px 12px',
          borderRadius: '20px'
        }}>
          {urls.length} total
        </span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {urls.map((url) => (
          <UrlCard key={url.id} url={url} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default UrlList;