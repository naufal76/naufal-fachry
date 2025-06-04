import { useState } from "react";

export default function Photography() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const photoItems = [
    { title: "Chilling with Friend", src: "/assets/cafe.jpg", description: "Bersantai di cafe dengan teman-teman." },
    { title: "Our Coffee", src: "/assets/coffee-2.jpg", description: "Aroma kopi yang khas dan menggugah selera." },
    { title: "Gunung Berkabut", src: "/assets/leaf.jpg", description: "Gunung berkabut yang terlihat misterius di pagi hari." },
    { title: "Danau Tenang", src: "/assets/shadow.jpg", description: "Air danau yang tenang dengan refleksi alam sekitar." },
    { title: "Perkotaan Malam", src: "/assets/flower.jpg", description: "Cahaya kota di malam hari yang penuh gemerlap." },
    { title: "Jalan Pedesaan", src: "/assets/kartini.jpg", description: "Jalan kecil di desa dengan hamparan sawah di kanan dan kiri." },
    { title: "Perkotaan Malam", src: "/assets/keychain.jpg", description: "Cahaya kota di malam hari yang penuh gemerlap." },
    { title: "Jalan Pedesaan", src: "/assets/cookies.jpg", description: "Jalan kecil di desa dengan hamparan sawah di kanan dan kiri." },
     { title: "Jalan Pedesaan", src: "/assets/rain-leaf.jpg", description: "Jalan kecil di desa dengan hamparan sawah di kanan dan kiri." },
  ];

  // Fungsi untuk membuka pop-up dengan indeks gambar tertentu
  const openPopup = (index) => setSelectedIndex(index);

  return (
    <div className="p-5 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-9 text-center text-gray-800">Design Portfolio</h2>

      {/* Grid Gambar */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {photoItems.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.title}
            className="w-full h-100 object-cover rounded-lg cursor-pointer transition duration-300 hover:scale-105"
            onClick={() => openPopup(index)}
          />
        ))}
      </div>

      {/* Pop-up Modal dengan Carousel & Scroll */}
      {selectedIndex !== null && (
        <div onClick={() => setSelectedIndex(null)} className="fixed inset-0 bg-black/70 flex items-center justify-center shadow-xl">
          <div className="relative bg-white p-6 rounded-lg max-w-4xl w-full h-5/6 overflow-y-auto text-black">
            {/* Judul & Deskripsi */}
            <h2 className="text-2xl font-bold mb-2">{photoItems[selectedIndex].title}</h2>
            <p className="text-gray-600 mb-4">{photoItems[selectedIndex].description}</p>

            {/* Gambar Alternatif */}
            <img src={photoItems[selectedIndex].src} alt={photoItems[selectedIndex].title} className="w-full h-auto rounded-lg" />

            {/* Tombol Tutup */}
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
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