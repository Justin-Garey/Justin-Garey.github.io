import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  config: any;
  loading: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://justin-garey-public-storage.s3.us-east-2.amazonaws.com/Personal-Website-Configuration/webpage.json')
      .then(r => r.json())
      .then(data => setConfig(data.homepage)).catch(error => console.error('Error fetching data:', error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AppContext.Provider value={{ config, loading }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
