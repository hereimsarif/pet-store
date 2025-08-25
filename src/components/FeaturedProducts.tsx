import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const featuredProducts = [
  {
    id: 'dog-food',
    name: 'Premium Dog Food',
    img: 'https://asimexaistorage.blob.core.windows.net/asimexaicontainer/hero_pets.png',
    price: '$29.99',
  },
  {
    id: 'cat-toy',
    name: 'Cat Teaser Toy',
    img: 'https://asimexaistorage.blob.core.windows.net/asimexaicontainer/hero_pets.png',
    price: '$12.99',
  },
  {
    id: 'rabbit-hutch',
    name: 'Rabbit Cozy Hutch',
    img: 'https://asimexaistorage.blob.core.windows.net/asimexaicontainer/hero_pets.png',
    price: '$99.99',
  },
];

function FeaturedProducts() {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {featuredProducts.map((product) => (
        <Card
          key={product.id}
          className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-pastel-blue/10 flex flex-col items-center"
        >
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-32 object-cover rounded-xl mb-3"
            loading="lazy"
          />
          <h3 className="text-lg font-semibold text-pastel-blue mb-1 text-center">{product.name}</h3>
          <p className="text-base text-pastel-yellow mb-2 font-bold">{product.price}</p>
          <Button
            disabled
            className="bg-pastel-yellow text-white font-bold px-5 py-1 rounded-xl shadow cursor-not-allowed opacity-70"
          >
            Add to Cart
          </Button>
        </Card>
      ))}
    </div>
  );
}

export default FeaturedProducts;
