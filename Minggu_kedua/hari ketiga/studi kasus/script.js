// Buat sebuah array of object bernama menu yang berisi minimal 5 makanan.
// Tiap object punya property:

// nama (string)
// kategori (string, contoh: "makanan", "minuman")
// harga (number)
// Gunakan forEach untuk menampilkan semua menu dengan format:

let menu = [
    { nama: "Tuna Steak", kategori: "Makanan", harga: 90000 },
    { nama: "Mie Godog/Goreng Jawa", kategori: "Makanan", harga: 25000 },
    { nama: "Es Teh", kategori: "Minuman", harga: 15000 },
    { nama: "Es Jeruk", kategori: "Minuman", harga: 18000},
    { nama: "Sate Sapi", kategori: "Makanan", harga: 80000 }
];  
menu.forEach(item => {
    console.log(`Nama: ${item.nama} | Kategori: ${item.kategori} | Harga: ${item.harga}`);
});


// Nama: Nasi Goreng | Kategori: Makanan | Harga: 20000
// Gunakan filter untuk mencari semua makanan/minuman dengan harga di bawah Rp30.000.
let murahmeriah = menu.filter(item => item.harga < 30000);
console.log(murahmeriah);


// Gunakan map untuk membuat array baru yang hanya berisi nama-nama menu.
let namaMenu = menu.map(item => item.nama);
console.log(namaMenu);


// Gunakan reduce untuk menghitung total harga semua menu.
let totalHarga = menu.reduce((total, item) => total + item.harga, 0);
console.log( "Total yang harus di bayar RP." + totalHarga);


// Gunakan find untuk mencari satu menu dengan nama tertentu (misal: "Es Teh").
let cariMenu = menu.find(item => item.nama === "Es Jeruk");
console.log(cariMenu);

// Gunakan destructuring array untuk mengambil 2 makanan pertama dari menu ke variabel makanan1 dan makanan2.
let [makanan1, makanan2] = menu;
console.log(makanan1, makanan2);

// Gunakan destructuring object untuk mengambil nama dan harga dari salah satu menu (misal menu[0]).
let { nama, harga } = menu [3];
console.log ( "Menu: " + nama);
console.log ( "Harga: " + harga);
