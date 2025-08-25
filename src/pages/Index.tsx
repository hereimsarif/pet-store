import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FeaturedProducts from '@/components/FeaturedProducts';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

const HERO_IMAGE = 'https://asimexaistorage.blob.core.windows.net/asimexaicontainer/hero_pets.png';

function Index() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="flex flex-col md:flex-row items-center bg-pastel-blue/10 rounded-2xl shadow-lg mb-10 px-4 py-8 gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-pastel-blue mb-4">Pawfect Store</h1>
          <p className="text-lg md:text-xl text-pastel-blue-900 mb-6">Your local destination for happy pets and happier pet owners.</p>
          <Link to="/products">
            <Button className="bg-pastel-yellow hover:bg-pastel-yellow/80 text-pastel-blue font-bold text-lg shadow rounded-2xl px-8 py-3 transition duration-200">Shop Now</Button>
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src={HERO_IMAGE}
            alt="Group of cheerful pets for hero banner"
            className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-pastel-blue mb-6 text-center">Featured Products</h2>
        <FeaturedProducts />
      </section>

      {/* Testimonials Carousel */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-pastel-yellow mb-8 text-center">Happy Customers</h2>
        <TestimonialsCarousel />
      </section>
    </div>
  );
}

export default Index;
