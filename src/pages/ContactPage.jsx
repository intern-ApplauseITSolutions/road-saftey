import Contact from '../components/sections/Contact';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us to learn more or support our cause
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}
