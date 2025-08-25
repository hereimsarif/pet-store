import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 'dog-food',
    name: 'Premium Dog Food',
    price: '$29.99',
    img: 'https://asimexaistorage.blob.core.windows.net/asimexaicontainer/hero_pets.png',
  },
  {
    id: 'cat-toy',
    name: 'Cat Teaser Toy',
    price: '$12.99',
    img: 'https://asimexaistorage.blob.core.windows.net/asimexaicontainer/hero_pets.png',
  },
  {
    id: 'rabbit-hutch',
    name: 'Rabbit Cozy Hutch',
    price: '$99.99',
    img: 'https://asimexaistorage.blob.core.windows.net/asimexaicontainer/hero_pets.png',
  },
  {
    id: 'bird-cage',
    name: 'Bird Paradise Cage',
    price: '$54.99',
    img: 'https://asimexaistorage.blob.core.windows.net/asimexaicontainer/hero_pets.png',
  },
  {
    id: 'puppy-treats',
    name: 'Puppy Treats',
    price: '$8.99',
    img: 'https://asimexaistorage.blob.core.windows.net/asimexaicontainer/hero_pets.png',
  },
  {
    id: 'aquarium-kit',
    name: 'Aquarium Starter Kit',
    price: '$79.99',
    img: 'https://asimexaistorage.blob.core.windows.net/asimexaicontainer/hero_pets.png',
  },
];

function Products() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-pastel-blue mb-8 text-center">Our Products</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <Card
            key={product.id}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-pastel-blue/10 flex flex-col items-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
              loading="lazy"
            />
            <h2 className="text-xl font-semibold text-pastel-blue mb-2 text-center">{product.name}</h2>
            <p className="text-lg text-pastel-yellow mb-4 font-bold">{product.price}</p>
            <Button
              disabled
              className="bg-pastel-yellow text-white font-bold px-6 py-2 rounded-xl shadow hover:bg-pastel-yellow/90 cursor-not-allowed opacity-70"
            >
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;
