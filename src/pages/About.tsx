import { Card } from '@/components/ui/card';

function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-pastel-blue mb-6 text-center">About Us</h1>
      <Card className="rounded-2xl shadow-lg bg-white border border-pastel-blue/10 p-6 mb-8">
        <p className="text-lg text-pastel-blue-900 mb-4">
          Pawfect Store is dedicated to making pets and their people smile. Founded by animal lovers, our mission is to provide high-quality products and friendly service for all your furry, feathery, and scaly family members. We value compassion, trust, and excellence in everything we do!
        </p>
        <ul className="list-disc list-inside text-pastel-blue mb-4">
          <li><strong>Mission:</strong> Happy pets, happier homes.</li>
          <li><strong>Values:</strong> Kindness, community, quality, fun.</li>
        </ul>
      </Card>
      <div className="flex justify-center">
        <img
          src="https://asimexaistorage.blob.core.windows.net/asimexaicontainer/hero_pets.png"
          alt="Friendly pet store team illustration"
          className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default About;
