import React from "react";

const Features = () => {
  return (
    <section className="h-screen container mx-auto py-12">
      <div className="mx-auto py-20">
        {" "}
        {/* Added mx-auto here for centering */}
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-20">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16">
          <div className="bg-blue-600 p-6 rounded-lg shadow-lg h-64">
            <h3 className="font-bold text-xl mb-2">Innovative Technology</h3>
            <p className="mb-2">
              We leverage cutting-edge technology to ensure secure transactions.
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>Advanced encryption methods for data security.</li>
              <li>Real-time transaction monitoring.</li>
              <li>User-friendly interface for seamless experience.</li>
            </ul>
          </div>
          <div className="bg-blue-600 p-6 rounded-lg shadow-lg h-64">
            <h3 className="font-bold text-xl mb-2">Strong Community</h3>
            <p className="mb-2">
              Join a vibrant community of like-minded investors and enthusiasts.
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>Participate in forums and discussions.</li>
              <li>Access to exclusive events and webinars.</li>
              <li>Networking opportunities with industry leaders.</li>
            </ul>
          </div>
          <div className="bg-blue-600 p-6 rounded-lg shadow-lg h-64">
            <h3 className="font-bold text-xl mb-2">Transparent Process</h3>
            <p className="mb-2">
              We maintain transparency in all our operations and communications.
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>Clear reporting on transactions and fees.</li>
              <li>Open communication channels for feedback.</li>
              <li>Regular updates on platform changes and improvements.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
