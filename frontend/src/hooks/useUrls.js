import { useState, useEffect, useCallback } from 'react';
import { shortenUrl, deleteUrl } from '../services/api';

export const useUrls = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUrls = useCallback(async () => {
    const stored = localStorage.getItem('shortenedUrls');
    if (stored) {
      setUrls(JSON.parse(stored));
    }
  }, []);

  const addUrl = useCallback(async (originalUrl) => {
    setLoading(true);
    setError(null);
    try {
      const result = await shortenUrl(originalUrl);
      
      const newUrl = {
        id: Date.now(),
        originalUrl: result.data.originalUrl,
        shortCode: result.data.shortCode,
        shortUrl: result.data.shortUrl,
        clicks: result.data.clicks,
        createdAt: new Date().toISOString()
      };
      
      const updatedUrls = [newUrl, ...urls];
      setUrls(updatedUrls);
      localStorage.setItem('shortenedUrls', JSON.stringify(updatedUrls));
      
      return result;
    } catch (err) {
      setError(err.error || 'Failed to shorten URL');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [urls]);

  const removeUrl = useCallback(async (shortCode) => {
    setLoading(true);
    setError(null);
    try {
      await deleteUrl(shortCode);
      
      const updatedUrls = urls.filter(url => url.shortCode !== shortCode);
      setUrls(updatedUrls);
      localStorage.setItem('shortenedUrls', JSON.stringify(updatedUrls));
      
    } catch (err) {
      setError(err.error || 'Failed to delete URL');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [urls]);

  useEffect(() => {
    fetchUrls();
  }, [fetchUrls]);

  return { urls, loading, error, addUrl, removeUrl };
};