import './style.css'

const menuData = [
    {
      id: 1,
      nama: "Lemper Ayam",
      harga: "5.000",
      deskripsi: "Ketan gurih dengan isian ayam suwir melimpah.",
      kategori: "Kue Basah",
      gambar: "/img/lemper.jpg" // Ganti dengan link baru
    },
    {
      id: 2,
      nama: "Lapis Legit",
      harga: "10.000",
      deskripsi: "Kue lapis premium dengan aroma rempah pilihan.",
      kategori: "Spesial PO",
      gambar: "/img/lapis.jpg"
    },
    // Kategori: Menu Hari Ini (Menu yang sedang promo/ready)
    {
      id: 3,
      nama: "Risoles Smoke Beef",
      harga: 7000,
      kategori: "hari-ini",
      gambar: "/img/risoles.jpg",
      deskripsi: "Ready stok terbatas untuk hari ini!"
    },
    // Kategori: Jajan Pasar
    {
      id: 4,
      nama: "Kue Ku Merah",
      harga: 4000,
      kategori: "jajan-pasar",
      gambar: "/img/kue-ku.jpg",
      deskripsi: "Tekstur kenyal dengan isian kacang hijau manis."
    },
    // Kategori Khusus: Cheese Tartlets (Dengan Pilihan)
    {
      id: 5,
      nama: "Cheese Tartlets Premium",
      harga: 15000,
      kategori: "cheese-tartlets",
      gambar: "/img/cheese-tart.jpg",
      deskripsi: "Tart keju lumer. Silakan pilih rasa dan topping Anda.",
      options: {
        rasa: ["Original", "Chocolate", "Matcha"],
        topping: ["Almond", "Choco Chip", "Keju Parut"],
        jumlah: [4, 6, 9, 12]
      }
    }
  ];

  const cheeseTartConfig = {
  nama: "Cheese Tartlets Premium",
  hargaBase: 15000, // Harga per pcs atau per box
  opsiPaket: [
    { label: "Pilih 1 Rasa Utama", value: "single" },
    { label: "Mix (Pilihan Penjual)", value: "mix" },
    { label: "Custom (Pilih Sendiri)", value: "custom" }
  ],
  pilihanTopping: ["Original Cheese", "Choco Crunchy", "Matcha", "Strawberry", "Tiramisu"],
  pilihanIsi: [4, 6, 9, 12]
};
  
  const menuGrid = document.querySelector('#menu-grid');
  
  // Fungsi untuk membuat kartu menu otomatis
  menuData.forEach(item => {
    menuGrid.innerHTML += `
    <div class="flex flex-col h-full bg-emerald-100 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
    <img src="${item.gambar}" style="height: 200px; width: 100%; object-fit: cover;" class="rounded-t-2xl">
    
    <div class="p-6 flex flex-col flex-grow">
      <span class="text-xs font-bold text-emerald-600 uppercase mb-1">${item.kategori}</span>
      <h3 class="text-lg font-bold text-slate-900">${item.nama}</h3>
      
      <p class="text-slate-500 text-sm mb-4 flex-grow">${item.deskripsi}</p>
      
      <div class="flex items-center justify-between pt-4 border-t border-slate-50">
        <span class="text-xl font-bold">Rp ${item.harga}</span>
        <a href="#" class="bg-green-500 text-black px-4 py-2 rounded-lg text-sm">Pesan</a>
      </div>
    </div>
  </div>
    `;
  });


  function pesanProduk(id) {
  const produk = menuData.find(item => item.id === id);
  
  if (produk.kategori === 'cheese-tartlets') {
    // Ambil nilai dari input/select (misal kita buatkan modal atau form sederhana)
    const rasa = document.querySelector(`#rasa-${id}`).value;
    const topping = document.querySelector(`#topping-${id}`).value;
    const qty = document.querySelector(`#qty-${id}`).value;
    
    const pesanWA = `Halo Clarissa Bakehouse, saya mau pesan ${produk.nama}:\n- Rasa: ${rasa}\n- Topping: ${topping}\n- Jumlah: ${qty} pcs`;
    window.open(`https://wa.me/628123456789?text=${encodeURIComponent(pesanWA)}`);
  } else {
    // Pesan biasa untuk jajan pasar
    const pesanWA = `Halo, saya mau pesan ${produk.nama}. Apakah ready?`;
    window.open(`https://wa.me/628123456789?text=${encodeURIComponent(pesanWA)}`);
  }
}