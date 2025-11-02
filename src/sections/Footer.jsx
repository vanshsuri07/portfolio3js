import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 mt-36">
      {/* Terms & Privacy */}
      <div className="text-white-500 flex gap-2">
        <p>Terms and Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3">
        {/* GitHub */}
        <a
          href="https://github.com/vanshsuri07"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/vanshsuri007/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src="/assets/linkedin.svg"
            alt="linkedin"
            className="w-1/2 h-1/2"
          />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/vanshsuri_007/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-white-500">2025 Vansh. All Rights Reserved.</p>
    </section>
  );
};

export default Footer;
