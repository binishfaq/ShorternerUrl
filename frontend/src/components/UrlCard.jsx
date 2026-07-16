import React, { useState } from 'react';
import { FaCopy, FaCheck, FaTrash, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';

const UrlCard = ({ url, onDelete }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url.shortUrl);
      setCopied(true);
      toast.success('📋 Copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('❌ Failed to copy');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.floor((now - date) / (1000 * 60));
    
    if (diff < 1) return 'Just now';
    if (diff < 60) return `${diff}m ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
    return date.toLocaleDateString();
  };

  const truncateUrl = (url, maxLength = 50) => {
    if (url.length <= maxLength) return url;
    return url.slice(0, maxLength) + '...';
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '20px 24px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
      transition: 'all 0.3s',
      border: '1px solid #f1f5f9'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <span style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#667eea',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <FaExternalLinkAlt style={{ fontSize: '14px', color: '#9ca3af' }} />
            /{url.shortCode}
          </span>
          <button
            onClick={handleCopy}
            style={{
              padding: '4px 12px',
              background: copied ? '#10b981' : '#f3f4f6',
              border: 'none',
              borderRadius: '8px',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: copied ? 'white' : '#4b5563'
            }}
          >
            {copied ? <FaCheck /> : <FaCopy />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <button
          onClick={() => onDelete(url.shortCode)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#9ca3af',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s',
            padding: '4px 8px',
            borderRadius: '8px'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#ef4444';
            e.target.style.background = '#fef2f2';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#9ca3af';
            e.target.style.background = 'transparent';
          }}
        >
          <FaTrash />
        </button>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <p style={{
          color: '#6b7280',
          fontSize: '14px',
          wordBreak: 'break-all'
        }}>
          {truncateUrl(url.originalUrl)}
        </p>
        <div style={{
          display: 'flex',
          gap: '16px',
          fontSize: '13px',
          color: '#9ca3af'
        }}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <FaEye style={{ fontSize: '14px' }} />
            {url.clicks} clicks
          </span>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            🕐 {formatDate(url.createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UrlCard;