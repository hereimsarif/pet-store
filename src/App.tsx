import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Index from '@/pages/Index';
import Products from '@/pages/Products';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import '@/index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 px-4 pb-12 pt-4 md:px-8 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
