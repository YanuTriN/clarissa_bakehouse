import './style.css'

const menuData = [
    {
      nama: "Lemper Ayam",
      harga: "5.000",
      deskripsi: "Ketan gurih dengan isian ayam suwir melimpah.",
      kategori: "Kue Basah",
      gambar: "/img/lemper.jpg" // Ganti dengan link baru
    },
    {
      nama: "Lapis Legit",
      harga: "10.000",
      deskripsi: "Kue lapis premium dengan aroma rempah pilihan.",
      kategori: "Spesial PO",
      gambar: "/img/lapis.jpg"
    }
  ];
  
  const menuGrid = document.querySelector('#menu-grid');
  
  // Fungsi untuk membuat kartu menu otomatis
  menuData.forEach(item => {
    menuGrid.innerHTML += `
    <div class="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
    <img src="${item.gambar}" style="height: 200px; width: 100%; object-fit: cover;" class="rounded-t-2xl">
    
    <div class="p-6 flex flex-col flex-grow">
      <span class="text-xs font-bold text-pink-600 uppercase mb-1">${item.kategori}</span>
      <h3 class="text-lg font-bold text-slate-900">${item.nama}</h3>
      
      <p class="text-slate-500 text-sm mb-4 flex-grow">${item.deskripsi}</p>
      
      <div class="flex items-center justify-between pt-4 border-t border-slate-50">
        <span class="text-xl font-bold">Rp ${item.harga}</span>
        <a href="#" class="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">Pesan</a>
      </div>
    </div>
  </div>
    `;
  });