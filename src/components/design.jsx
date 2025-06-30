import { useState } from "react";

export default function Design() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Daftar gambar utama & alternatif
  const images = [
    { title: "Tree Faster – Branding & Digital Presence", src: "/assets/treefaster.jpg", altSrc: "/assets/treefaster-popup.jpg", description: "I designed the logo, brand identity, and digital assets to strengthen the company’s presence, combining sustainability and innovation. The visuals reflect dynamism and environmental commitment, while the social media strategy ensures consistent and engaging brand communication." },
    { title: "Design 2", src: "/assets/teras.png", altSrc: "/assets/teras-popup.jpg", description: "Logo minimalis dari brand B" },
    { title: "Ayam Mripil – Spicy & Savory Identity", src: "/assets/ayam-mripil.jpg", altSrc: "/assets/ayammripil-popup.png", description: "A bold brand identity capturing the essence of flavor-packed chicken dishes with signature sambal. The logo, packaging, and employee uniforms establish a strong, cohesive presence, ensuring Ayam Mripil stands out in the F&B market." },
    { title: "Design 4", src: "/assets/work-4.jpg", altSrc: "/assets/work-4-popup.jpg", description: "Logo minimalis dari brand D" },
    { title: "Alfabetea – Nature-Inspired Branding", src: "/assets/alfabetea.png", altSrc: "/assets/alfabetea-popup.png", description: "A logo inspired by tea leaves and the letter A, blending organic elements with modern design. Packaging, menus, and marketing materials enhance brand recognition, while a strong social media presence engages tea lovers everywhere."},
    { title: "Edge Home Stay – Refined Hospitality Branding", src: "/assets/edge.jpg", altSrc: "/assets/edge-popup.jpg", description: "I crafted the logo, identity, and essential hotel assets for a seamless guest experience, from business cards and merchandise to room essentials and calendars. This project reflects elegance and complexity, elevating Edge Home Stay’s brand presence." },
    { title: "Sharing Gils Blog – Tech Community & Identity", src: "/assets/sgb.jpg", altSrc: "/assets/sgb-popup.png", description: "I designed the logo, brand identity, and merchandise for Sharing Gils Blog, a thriving technology community on Facebook. The logo’s modern intertwining “S” and “G” reflect connection, innovation, and a dynamic tech landscape, complemented by circuit-inspired elements that emphasize the digital theme. This project captures both aesthetics and philosophy, solidifying a strong visual identity for the community." },
    { title: "Design 8", src: "/assets/sinar-rejeki.jpg", altSrc: "/assets/sinar-rejeki-popup.jpg", description: "Logo minimalis dari brand H" },
    { title: "Srikandi Sumber Rejeki – Dynamic & Reliable Distribution", src: "/assets/srikandi.png", altSrc: "/assets/srikandi-popup.jpg", description: "A brand identity designed for efficiency and movement, reflecting the company’s commitment to fast and comprehensive distribution of essential goods like oil, sugar, and flour. The logo symbolizes a dynamic pathway, reinforcing the seamless flow of products. Supporting assets include business cards, official documents, and employee uniforms, ensuring a cohesive and professional brand presence." },
    { title: "Kopi Tara – Bold Flavor, Strong Identity", src: "/assets/kopi-tara.jpg", altSrc: "/assets/kopitara-popup.png", description: "A logo designed to embody richness and warmth, reflecting the essence of premium coffee. The brand’s social media presence is curated for consistency, ensuring visually engaging content that connects with coffee lovers." },
    { title: "K-Rara Cookies – Sweet Stories in Every Post", src: "/assets/k-rara.jpg", altSrc: "/assets/krara-popup.jpg", description: "A visual and social media strategy crafted to reflect the brand’s warm identity, ensuring consistency in photography, design, and content planning. Every post aligns with K-Rara Cookies’ logo and branding, creating an engaging and cohesive digital presence." },
    { title: "Yam Nyam – Crispy Flavor, Bold Identity", src: "/assets/yam-nyam.jpg", altSrc: "/assets/yamnyam-popup.png", description: "A dynamic brand identity for a chicken-based F&B business, reflecting its vibrant and appetizing appeal. The logo, packaging, and essential assets—including employee uniforms, official documents, and promotional banners—create a cohesive and recognizable presence." },
  ];

  // Fungsi untuk membuka pop-up dengan indeks gambar tertentu
  const openPopup = (index) => setSelectedIndex(index);

  // Fungsi untuk navigasi ke gambar berikutnya
  const nextImage = () => setSelectedIndex((prev) => (prev + 1) % images.length);

  // Fungsi untuk navigasi ke gambar sebelumnya
  const prevImage = () => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="p-5 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-9 text-center text-gray-800">Design Portfolio</h2>

      {/* Grid Gambar */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="aspect-[1/1] w-full overflow-hidden rounded-lg cursor-pointer transition duration-300 hover:scale-105">
                  <iframe src="https://www.behance.net/embed/project/202910957?ilo0=1" className="w-full h-full"
                           allowfullscreen lazyload frameborder="0"  scrolling="no" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
             </div>
             <div className="aspect-[1/1] w-full overflow-hidden rounded-lg cursor-pointer transition duration-300 hover:scale-105">
                  <iframe src="https://www.behance.net/embed/project/156907507?ilo0=1" className="w-full h-full"
                           allowfullscreen lazyload frameborder="0"  scrolling="no" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
             </div>
             <div className="aspect-[1/1] w-full overflow-hidden rounded-lg cursor-pointer transition duration-300 hover:scale-105">
                  <iframe src="https://www.behance.net/embed/project/156920505?ilo0=1" className="w-full h-full"
                           allowfullscreen lazyload frameborder="0"  scrolling="no" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
             </div>
             <div className="aspect-[1/1] w-full overflow-hidden rounded-lg cursor-pointer transition duration-300 hover:scale-105">
                  <iframe src="https://www.behance.net/embed/project/166945255?ilo0=1" className="w-full h-full"
                           allowfullscreen lazyload frameborder="0"  scrolling="no" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
             </div>
             <div className="aspect-[1/1] w-full overflow-hidden rounded-lg cursor-pointer transition duration-300 hover:scale-105">
                  <iframe src="https://www.behance.net/embed/project/167036619?ilo0=1" className="w-full h-full"
                           allowfullscreen lazyload frameborder="0"  scrolling="no" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
             </div>
             <div className="aspect-[1/1] w-full overflow-hidden rounded-lg cursor-pointer transition duration-300 hover:scale-105">
                  <iframe src="https://www.behance.net/embed/project/167136623?ilo0=1" className="w-full h-full"
                           allowfullscreen lazyload frameborder="0"  scrolling="no" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
             </div>
             <div className="aspect-[1/1] w-full overflow-hidden rounded-lg cursor-pointer transition duration-300 hover:scale-105">
                  <iframe src="https://www.behance.net/embed/project/229085937?ilo0=1" className="w-full h-full"
                           allowfullscreen lazyload frameborder="0"  scrolling="no" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
             </div>
             <div className="aspect-[1/1] w-full overflow-hidden rounded-lg cursor-pointer transition duration-300 hover:scale-105">
                  <iframe src="https://www.behance.net/embed/project/175892999?ilo0=1" className="w-full h-full"
                           allowfullscreen lazyload frameborder="0"  scrolling="no" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
             </div>
             <div className="aspect-[1/1] w-full overflow-hidden rounded-lg cursor-pointer transition duration-300 hover:scale-105">
                  <iframe src="https://www.behance.net/embed/project/202069579?ilo0=1" className="w-full h-full"
                           allowfullscreen lazyload frameborder="0"  scrolling="no" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
             </div>
             <div className="aspect-[1/1] w-full overflow-hidden rounded-lg cursor-pointer transition duration-300 hover:scale-105">
                  <iframe src="https://www.behance.net/embed/project/229086083?ilo0=1" className="w-full h-full"
                           allowfullscreen lazyload frameborder="0"  scrolling="no" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
             </div>
             <div className="aspect-[1/1] w-full overflow-hidden rounded-lg cursor-pointer transition duration-300 hover:scale-105">
                  <iframe src="https://www.behance.net/embed/project/229086311?ilo0=1" className="w-full h-full"
                           allowfullscreen lazyload frameborder="0"  scrolling="no" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
             </div>
             <div className="aspect-[1/1] w-full overflow-hidden rounded-lg cursor-pointer transition duration-300 hover:scale-105">
                  <iframe src="https://www.behance.net/embed/project/166947011?ilo0=1" className="w-full h-full"
                           allowfullscreen lazyload frameborder="0"  scrolling="no" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
             </div>
      </div>
  

      {/* Pop-up Modal dengan Carousel & Scroll */}
      {selectedIndex !== null && (
        <div onClick={()=>setSelectedIndex(null)} className="fixed inset-0 bg-black/70 flex items-center justify-center shadow-xl">
          <div className="relative bg-white p-6 rounded-lg max-w-4xl w-full h-5/6 overflow-y-auto text-black">
            {/* Judul & Deskripsi */}
            <h2 className="text-2xl font-bold mb-2">{images[selectedIndex].title}</h2>
            <p className="text-gray-600 mb-4">{images[selectedIndex].description}</p>

            {/* Gambar Alternatif */}
            <img src={images[selectedIndex].altSrc} alt="Selected" className="w-full h-auto rounded-lg" />

            {/* Tombol Navigasi Carousel */}
            <div className="flex justify-between mt-4">
              <button className="px-4 py-2 bg-gray-700 text-gray-700 rounded-lg hover:bg-gray-600" onClick={prevImage}>
                ⬅ Previous
              </button>
              <button className="px-4 py-2 bg-gray-700 text-gray-700 rounded-lg hover:bg-gray-600" onClick={nextImage}>
                Next ➡
              </button>
            </div>

            {/* Tombol Tutup */}
            <button
              className="absolute top-2 right-2 bg-red-500 text-gray-7 px-3 py-1 rounded-full"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}