import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaTwitch } from "react-icons/fa";

export default function Portfolio() {
  // === Customization Section Start ===
  // You can change your portfolio background color, text color, and font family here:
  const [bgColor, setBgColor] = useState("#0a192f"); // Background Color (Hex)
  const [textColor, setTextColor] = useState("#ccd6f6"); // Text Color (Hex)
  const [fontFamily, setFontFamily] = useState("sans-serif"); // Font Family (e.g., 'sans-serif', 'serif', 'monospace', 'cursive')
  // === Customization Section End ===

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, fontFamily }} className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0d1117] p-4 shadow z-40 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
        <ul className="flex justify-center gap-6 text-sm md:text-base">
          <li><a href="#home" className="hover:text-[#64ffda] transition-all duration-300 ease-in-out">Home</a></li>
          <li><a href="#about" className="hover:text-[#64ffda] transition-all duration-300 ease-in-out">About</a></li>
          <li><a href="#skills" className="hover:text-[#64ffda] transition-all duration-300 ease-in-out">Skills</a></li>
          <li><a href="#projects" className="hover:text-[#64ffda] transition-all duration-300 ease-in-out">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#64ffda] transition-all duration-300 ease-in-out">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center h-screen text-center px-4 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">Christian Dave Crisostomo</h1>
        <p className="text-lg md:text-2xl text-gray-400">Freelancer | Content Creator | Social Media Manager</p>
        <div className="flex gap-4 mt-6">
          <a href="https://instagram.com/ch4ng.u" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 hover:text-pink-500 transition-transform duration-300 ease-in-out hover:scale-125 active:scale-95" />
          </a>
          <a href="https://linkedin.com/in/cdcrisostomo" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 hover:text-blue-500 transition-transform duration-300 ease-in-out hover:scale-125 active:scale-95" />
          </a>
          <a href="https://tiktok.com/@ch4ngu" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="w-6 h-6 hover:text-white transition-transform duration-300 ease-in-out hover:scale-125 active:scale-95" />
          </a>
          <a href="https://youtube.com/@cH4ngu" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="w-6 h-6 hover:text-red-500 transition-transform duration-300 ease-in-out hover:scale-125 active:scale-95" />
          </a>
          <a href="https://twitch.tv/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitch className="w-6 h-6 hover:text-purple-500 transition-transform duration-300 ease-in-out hover:scale-125 active:scale-95" />
          </a>
        </div>
        <a
          href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:31d7c547-613a-474f-b411-ce7caf5ed548"
          className="mt-6 inline-block bg-[#64ffda] hover:bg-teal-600 text-black font-semibold py-2 px-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          target="_blank"
        >
          View Resume
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-[#0d1117] text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          I'm a passionate freelancer with almost a year of experience, certified in Social Media Marketing via Udemy. I specialize in content creation, streaming on TikTok, and sharing videos on YouTube. While I'm not famous yet, I'm working hard to grow my online presence. I also have a personal touch on Instagram and a background in Computer Engineering.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-20 bg-[#1c1f26] text-center">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-300">
          <span className="bg-gray-700 px-4 py-2 rounded-full">English & Tagalog</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Basic Coding</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Canva</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">CapCut</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Adobe Premiere</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">After Effects</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Social Media Strategy</span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 bg-[#0d1117] text-center">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400">Coming soon...</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-[#0a192f] text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400">Feel free to message me on any platform above or email me at:</p>
        <p className="mt-2 text-[#64ffda] font-medium">cdcrisostomo.30@gmail.com</p>
      </section>
    </div>
  );
}
