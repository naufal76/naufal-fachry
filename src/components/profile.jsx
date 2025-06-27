import { useEffect, useState } from "react";


export default function Profile() {

   const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      const newVisibility = {};

      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          newVisibility[index] = true;
        }
      });

      setIsVisible(newVisibility);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-700 p-10 flex flex-col grid-cols-2 items-center">
      {/* Hero Section */}
        <div className={`flex justify-center fade-in ${isVisible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700`}>
          <img src="/assets/hero-4.png" alt="Naufal Fachry Abdullah" className="w-100 h-auto md:w-auto md:h-90 rounded-full shadow-2xl" />
        </div>
       <div className={`flex flex-col mb-5 justify-center text-center fade-in ${isVisible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-900`}>
        <h1 className="text-5xl font-bold mt-8 mb-2">Naufal Fachry Abdullah</h1>
        <p className="text-lg text-gray-500">Graphic Designer & Content Creation</p>
      </div>

      {/* About Me */}
      <div className={`max-w-3xl text-center mb-10 fade-in ${isVisible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-600`}>
        <p className="text-gray-500 leading-relaxed">
          Hi! I’m a passionate Graphic Designer and Content Creator who loves turning ideas into powerful visuals and stories.
          With experience in branding, digital content, and UI/UX design, I enjoy exploring new ways to engage audiences.
        </p>
      </div>

       {/* Social Links */}
      <div className="flex gap-4 mt-5">
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/naufal-fachry-abdullah/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/linkedin.png" alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition" />
      </a>

      {/* GitHub */}
      <a href="https://github.com/naufal76" target="_blank" rel="noopener noreferrer">
        <img src="/assets/github.png" alt="GitHub" className="w-10 h-10 hover:scale-110 transition" />
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/naufalfachry_/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/instagram.png" alt="Instagram" className="w-10 h-10 hover:scale-110 transition" />
      </a>

      {/* YouTube */}
      <a href="https://www.youtube.com/@naufal_fachry" target="_blank" rel="noopener noreferrer">
        <img src="/assets/youtube.png" alt="YouTube" className="w-10 h-10 hover:scale-110 transition" />
      </a>

      {/* Behance */}
      <a href="https://www.behance.net/naufalfachry" target="_blank" rel="noopener noreferrer">
        <img src="/assets/behance.png" alt="Behance" className="w-10 h-10 hover:scale-110 transition" />
      </a>
    </div>

      {/* Skills Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl ">
        <div className={`bg-gray-200 p-6 rounded-lg shadow-lg hover:scale-105 transition ${isVisible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700`}>
          <h2 className="text-xl font-bold mb-4">Graphic Design</h2>
          <ul className="text-gray-700 space-y-2">
            <li>- Branding & Logo Design</li>
            <li>- UI/UX Design</li>
            <li>- Typography & Illustration</li>
            <li>- Photoshop, Illustrator, Figma</li>
          </ul>
        </div>
        <div className={`bg-gray-200 p-6 rounded-lg shadow-lg hover:scale-105 transition ${isVisible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-900`}>
          <h2 className="text-xl font-bold mb-4">Content Creation</h2>
          <ul className="text-gray-700 space-y-2">
            <li>- Short & YouTube Content</li>
            <li>- Visual Storytelling</li>
            <li>- Premiere Pro, After Effect</li>
          </ul>
        </div>
        <div className={`bg-gray-200 p-6 rounded-lg shadow-lg hover:scale-105 transition ${isVisible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-1000`}>
          <h2 className="text-xl font-bold mb-4">Front-End Development</h2>
          <ul className="text-gray-700 space-y-2">
            <li>- React Vite & Tailwind CSS</li>
            <li>- Responsive & Interactive UI</li>
            <li>- Animation & Parallax Effects</li>
            <li>- shadcn/ui for Clean UI</li>
          </ul>
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="mt-10 max-w-3xl text-center">
        <h2 className="text-xl font-bold mb-4">Tools & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-gray-200 rounded-md hover:scale-105 transition">Adobe Illustrator</span>
          <span className="px-4 py-2 bg-gray-200 rounded-md hover:scale-105 transition">Photoshop</span>
          <span className="px-4 py-2 bg-gray-200 rounded-md hover:scale-105 transition">Figma</span>
          <span className="px-4 py-2 bg-gray-200 rounded-md hover:scale-105 transition">CapCut</span>
          <span className="px-4 py-2 bg-gray-200 rounded-md hover:scale-105 transition">Premiere Pro</span>
          <span className="px-4 py-2 bg-gray-200 rounded-md hover:scale-105 transition">React Vite</span>
          <span className="px-4 py-2 bg-gray-200 rounded-md hover:scale-105 transition">Tailwind CSS</span>
          <span className="px-4 py-2 bg-gray-200 rounded-md hover:scale-105 transition">JavaScript</span>
        </div>
      </div>

     
    </div>
  );
}