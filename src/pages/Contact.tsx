import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

function Contact() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-pastel-blue mb-6 text-center">Contact Us</h1>
      <Card className="rounded-2xl shadow-lg bg-white border border-pastel-blue/10 p-6 mb-8">
        <form className="flex flex-col gap-5">
          <label className="flex flex-col gap-2">
            <span className="text-pastel-blue font-semibold">Name</span>
            <Input type="text" name="name" placeholder="Your Name" required className="rounded-xl border-pastel-yellow/20" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-pastel-blue font-semibold">Email</span>
            <Input type="email" name="email" placeholder="you@email.com" required className="rounded-xl border-pastel-yellow/20" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-pastel-blue font-semibold">Message</span>
            <Textarea name="message" placeholder="How can we help you?" required rows={4} className="rounded-xl border-pastel-yellow/20" />
          </label>
          <Button disabled className="bg-pastel-yellow text-white font-bold px-6 py-2 rounded-xl shadow cursor-not-allowed opacity-70 mt-2">
            Send Message
          </Button>
        </form>
      </Card>
      <div className="flex justify-center">
        <img
          src="https://asimexaistorage.blob.core.windows.net/asimexaicontainer/hero_pets.png"
          alt="Store location map placeholder"
          className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Contact;
