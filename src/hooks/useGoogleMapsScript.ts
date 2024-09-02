import { useEffect, useState } from "react";

export const useGoogleMapsScript = (apiKey: string | undefined) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!apiKey) {
      return;
    }

    const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);

    if (existingScript) {
      setLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.onload = () => setLoaded(true);
    script.onerror = () => {
      setError(true);
      console.error('Failed to load Google Maps script');
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [apiKey]);

  return { loaded, error };
};
