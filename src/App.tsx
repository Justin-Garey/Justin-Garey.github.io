import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import MarkdownPage from './Pages/MarkdownPage';
import Pages from './pages.json';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {Pages.pages.map((page) => (
          <Route key={page.path} path={page.path} element={<MarkdownPage src={page.src} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
