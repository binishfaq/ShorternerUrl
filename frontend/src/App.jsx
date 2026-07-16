import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUrls } from './hooks/useUrls';
import Navbar from './components/Navbar';
import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';

function App() {
  const { urls, loading, error, addUrl, removeUrl } = useUrls();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <Navbar />
        <UrlForm onSubmit={addUrl} loading={loading} />
        
        {error && (
          <div style={{
            background: '#fef2f2',
            color: '#ef4444',
            padding: '12px 16px',
            borderRadius: '12px',
            margin: '16px 0',
            textAlign: 'center',
            border: '1px solid #fecaca'
          }}>
            ❌ {error}
          </div>
        )}
        
        <UrlList urls={urls} loading={loading} onDelete={removeUrl} />
      </div>
    </div>
  );
}

export default App;