import { Carousel } from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Lisa G.',
    text: 'My dog loves everything from Pawfect Store. The staff are so helpful and friendly!',
  },
  {
    name: 'Tom W.',
    text: 'Best place in town for pet supplies! The toys are adorable and my cat is obsessed.',
  },
  {
    name: 'Jenna P.',
    text: 'Friendly atmosphere and quality products. I found the perfect hutch for my bunny.',
  },
  {
    name: 'Carlos M.',
    text: 'The aquarium starter kit was easy and fun! Great place for new pet owners.',
  },
];

function TestimonialsCarousel() {
  return (
    <Carousel className="w-full max-w-xl mx-auto">
      {testimonials.map((t, i) => (
        <Card
          key={i}
          className="rounded-2xl shadow-lg bg-white p-6 border border-pastel-blue/10 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300"
        >
          <p className="text-pastel-blue text-lg mb-4">"{t.text}"</p>
          <div className="text-pastel-yellow font-bold">{t.name}</div>
        </Card>
      ))}
    </Carousel>
  );
}

export default TestimonialsCarousel;
