import React from "react";

const Roadmap = () => {
  return (
    <section className="bg-white h-screen py-12 flex items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-blue-600">
          Our Roadmap
        </h2>
        {/* Example roadmap items */}
        <ul className="list-none mx-auto max-w-md space-y-4">
          {" "}
          {/* Removed default list style and added spacing */}
          <li className="bg-blue-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="font-bold">Phase 1:</span> Concept Development
          </li>
          <li className="bg-blue-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="font-bold">Phase 2:</span> Token Sale Launch
          </li>
          <li className="bg-blue-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="font-bold">Phase 3:</span> Platform Development
          </li>
          <li className="bg-blue-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="font-bold">Phase 4:</span> Community Building
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Roadmap;
