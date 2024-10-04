import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 text-center">
      <p>&copy; 2024 ICO . All rights reserved.</p>
      <div>
        {/* Social Media Links */}
        <a href="#" className="mx-2">
          Twitter
        </a>
        <a href="#" className="mx-2">
          Telegram
        </a>
        <a href="#" className="mx-2">
          Discord
        </a>
      </div>
    </footer>
  );
};

export default Footer;
