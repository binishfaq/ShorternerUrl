import React, { useState } from 'react';
import { FaLink, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

const UrlForm = ({ onSubmit, loading }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const validateUrl = (input) => {
    try {
      new URL(input);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    if (!validateUrl(url)) {
      setError('Please enter a valid URL (include http:// or https://)');
      return;
    }

    setError('');
    try {
      await onSubmit(url);
      setUrl('');
      toast.success('✨ URL shortened successfully!');
    } catch (err) {
      toast.error('❌ Failed to shorten URL');
    }
  };

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      padding: '32px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
      marginBottom: '30px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1a1a2e',
          marginBottom: '8px'
        }}>
          Shorten Your URL
        </h2>
        <p style={{ color: '#6b7280', fontSize: '16px' }}>
          Paste a long URL and get a short one instantly
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          flex: 1,
          position: 'relative',
          minWidth: '200px'
        }}>
          <FaLink style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#9ca3af',
            fontSize: '18px'
          }} />
          <input
            type="text"
            placeholder="https://example.com/very/long/url..."
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setError('');
            }}
            style={{
              width: '100%',
              padding: '14px 16px 14px 48px',
              border: error ? '2px solid #ef4444' : '2px solid #e5e7eb',
              borderRadius: '12px',
              fontSize: '16px',
              transition: 'all 0.3s',
              background: 'white'
            }}
            disabled={loading}
            onFocus={(e) => {
              e.target.style.borderColor = '#667eea';
              e.target.style.boxShadow = '0 0 0 4px rgba(102, 126, 234, 0.1)';
            }}
            onBlur={(e) => {
              if (!error) {
                e.target.style.borderColor = '#e5e7eb';
                e.target.style.boxShadow = 'none';
              }
            }}
          />
        </div>
        
        <button
          type="submit"
          style={{
            padding: '14px 32px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
            opacity: loading ? 0.6 : 1
          }}
          disabled={loading}
          onMouseEnter={(e) => {
            if (!loading) {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          {loading ? (
            <>
              <FaSpinner style={{ animation: 'spin 1s linear infinite' }} />
              Shortening...
            </>
          ) : (
            <>
              <FaLink />
              Shorten URL
            </>
          )}
        </button>
      </form>

      {error && (
        <p style={{
          color: '#ef4444',
          fontSize: '14px',
          marginTop: '12px',
          padding: '8px 12px',
          background: '#fef2f2',
          borderRadius: '8px'
        }}>
          {error}
        </p>
      )}

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default UrlForm;