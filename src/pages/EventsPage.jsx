import Events from '../components/sections/Events';

export default function EventsPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">News & Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with our latest initiatives and programs
          </p>
        </div>
      </div>
      <Events />
    </div>
  );
}
