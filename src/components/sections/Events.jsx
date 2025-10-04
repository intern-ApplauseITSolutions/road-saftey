import React from 'react';

export default function Events() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Road Safety Awareness Camp</h3>
              <p className="text-gray-600 mt-2">Join us for a day of learning and awareness about road safety.</p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span>📅 October 15, 2023</span>
                <span className="mx-2">•</span>
                <span>📍 City Center, Pune</span>
              </div>
            </div>
            {/* Add more events as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
