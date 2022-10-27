import './App.css';
import Home from './components/Home';
import AddBookmark from './components/AddBookmark';
import CataA from './components/CataA';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBookmark />} />
        <Route path="/card" element={<CataA />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
