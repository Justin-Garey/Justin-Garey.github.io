import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import MarkdownPage from './Pages/MarkdownPage';
import WebGame from './Pages/WebGame';
import Guide from './Components/Guide';
import webpage from "./webpage.json";

export default function App() {
  const [config, setConfig] = React.useState<any>(null);
  const [guides, setGuides] = React.useState<string[]>([]);

  React.useEffect(() => {
    setConfig(webpage.homepage);

    fetch('https://justin-garey-public-storage.s3.us-east-2.amazonaws.com/Guides/guides_links.json')
      .then(response => response.json())
      .then(data => setGuides(data))
      .catch(error => console.error('Error fetching guides:', error));
  }, []);

  if (!config || guides.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main config={config}/>} />
        {config.showcase_categories.flatMap((category: any) => 
          category.items.map((item: any) => (
            !!item.linkSrc && (
              item.linkSrc.endsWith('.md') 
          ? <Route key={item.link} path={item.link} element={<MarkdownPage src={item.linkSrc} />} />
          : <Route key={item.link} path={item.link} element={<WebGame src={item.linkSrc} />} />
            )
          ))
        )}
        {guides.length > 0 && guides.map((path, index) => (
            <Route 
              key={index}
              path={path}
              element={<Guide path={path} />}
            />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
