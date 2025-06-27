import { useState } from "react";

export default function Photography() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const photoItems = [
    { title: "Chilling with Friend", src: "/assets/cafe.jpg", description: "Ngopi santai di kafe bareng teman-teman—tempat di mana obrolan random bisa berubah jadi ide brilian." },
    { title: "Our Coffee", src: "/assets/coffee-2.jpg", description: "Kopi dulu, cerita menyusul, karena setiap tegukan punya kisah yang layak ditunggu." },
    { title: "Sunset and Leaf", src: "/assets/leaf.jpg", description: "Lembutnya cahaya sore memeluk tekstur daun, menciptakan harmoni warna yang tak tertangkap oleh kata." },
    { title: "Senyap di Antara Cahaya", src: "/assets/shadow.jpg", description: "Tersapu cahaya senja, daun-daun membisikkan keheningan—sejenak waktu berhenti, membiarkan visual berbicara lebih dari kata." },
    { title: "Snag Kembang", src: "/assets/flower.jpg", description: "Putih bersihnya menyapa lembut, sekilas pesona yang tawarkan kedamaian" },
    { title: "Jejak Kartini dalam Senyum Hari Ini", src: "/assets/kartini.jpg", description: "Jenuh senyum dan kebanggaan, momen ini memaknai semangat Kartini sebagai simbol kekuatan, keanggunan, dan harapan perempuan masa kini.." },
    { title: "IELC Merchandise", src: "/assets/keychain.jpg", description: "" },
    { title: "K'rara Foto Product", src: "/assets/cookies.jpg", description: "" },
     { title: "Rintik Hijau", src: "/assets/rain-leaf.jpg", description: "Tetesan hujan berdiam lembut di permukaan daun hijau, merekam keheningan alam setelah rinai yang reda" },
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