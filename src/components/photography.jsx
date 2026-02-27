import { useState } from "react";

export default function Photography() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const photoItems = [
    { title: "Chilling with Friend", src: "/assets/cafe.jpg", description: "Ngopi santai di kafe bareng teman-teman—tempat di mana obrolan random bisa berubah jadi ide brilian." },
    { title: "Educational Branding Photography for IELC", src: "/assets/angel-2.jpeg", description: "Komposisi menonjolkan subjek utama yang sedang membaca buku English File dengan latar gedung berlogo IELC, menghadirkan nuansa edukatif yang kuat. Pemilihan sudut pengambilan, pencahayaan alami, serta keseimbangan antara subjek dan elemen latar belakang memperlihatkan pendekatan fotografi yang berorientasi pada branding visual, sekaligus menekankan kemampuan dalam menciptakan karya yang estetis dan komunikatif." },
    { title: "Branding Portrait for IELC", src: "/assets/rahma-1.jpeg", description: "Potret ini menampilkan subjek dalam suasana interior modern yang hangat dan profesional. Komposisi memadukan pencahayaan alami, elemen dekoratif seperti kursi rotan dan panel kaca berbingkai merah, serta framing yang menekankan harmoni antara subjek dan ruang. Hasilnya menghadirkan atmosfer stylish sekaligus komunikatif, memperlihatkan kemampuan fotografi yang mendukung identitas visual IELC untuk media promosi seperti website dan brosur." },
    { title: "Student Portrait for IELC Promotion", src: "/assets/Bela.jpeg", description: "Subjek berpose sambil membawa buku English File dan tote bag, menghadirkan kesan akademik yang modern dan inspiratif. Komposisi foto memanfaatkan pencahayaan alami serta elemen interior seperti pintu kaca berbingkai merah dan rak buku untuk menciptakan suasana edukatif yang hangat. Framing yang seimbang menempatkan subjek sebagai pusat perhatian, menghasilkan visual yang komunikatif dan selaras dengan identitas brand IELC untuk berbagai material promosi." },
    { title: "Chinese New Year Celebration at IELC", src: "/assets/CNY-1.jpeg", description: "Para siswa IELC tampak antusias mengikuti permainan Horse Royale dalam rangka perayaan Chinese New Year. Dinamika gerakan, ekspresi ceria, serta dekorasi bernuansa meriah menghadirkan suasana penuh energi dan kebersamaan. Komposisi menekankan interaksi spontan dengan latar ruangan yang terang, memperlihatkan kemampuan fotografi dalam mendokumentasikan event dengan nuansa storytelling yang hidup dan komunikatif." },
    { title: "Jejak Kartini dalam Senyum Hari Ini", src: "/assets/kartini.jpg", description: "Jenuh senyum dan kebanggaan, momen ini memaknai semangat Kartini sebagai simbol kekuatan, keanggunan, dan harapan perempuan masa kini.." },
    { title: "IELC Merchandise", src: "/assets/keychain.jpg", description: "" },
    { title: "K'rara Foto Product", src: "/assets/cookies.jpg", description: "" },
     { title: "IELC Merchandise – Tote Bag Design", src: "/assets/Slingbag.jpeg", description: "Tote bag ini merupakan salah satu merchandise resmi IELC dengan desain ilustrasi garis bangunan yang dipadukan dengan kutipan inspiratif “In a world where you can be anything, be kind”. Detail koordinat geografis menambah sentuhan unik yang memperkuat identitas visual produk. Foto menampilkan tote bag dalam suasana hangat dan modern, menekankan kualitas desain sekaligus menghadirkan nuansa lifestyle yang selaras dengan branding IELC." },
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
          <div className="relative bg-white p-6 rounded-lg max-w-3xl w-full h-6/6 overflow-y-auto text-black">
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