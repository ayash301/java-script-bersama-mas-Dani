// Buat object mobil dengan properti merk dan warna. Tampilkan merk.
let mobil = {
    merk : "Toyota",
    warna : "Putih"
};
console.log(mobil.merk);   
  
// Buat object siswa dengan properti nama dan kelas. Tampilkan kelas.
let siswa = {
    nama : "Ayash",
    kelas : 12
};
console.log(siswa.kelas)

// Buat object hewan dengan properti jenis dan umur. Tampilkan jenis.
let hewan = {
    jenis : "Anjing",
    umur : 20
}
console.log(hewan.jenis)

// Buat object film dengan properti judul dan tahun. Tampilkan tahun.
let film = {
    judul : "Bumi Manusia",
    tahun : 2018
}
console.log(film.tahun)

// Buat object akun dengan properti username dan password. Tampilkan username.
let akun = {
    username : "Ayash1212",
    password : 1234
}
console.log(akun.username)

// Tambahkan properti harga pada object mobil.
mobil.harga = 200000000000000000000
console.log(mobil); 
// Tambahkan properti alamat pada object siswa.
siswa.alamat = "Salatiga"
console.log(siswa);
// Tambahkan properti makanan pada object hewan.
hewan.makanan = "Daging ayam"
console.log(hewan);
// Tambahkan properti genre pada object film.
film.genre = "Gore"
console.log(film);
// Tambahkan properti email pada object akun.
akun.email = "Anuwayyif@gmail.com"
console.log(akun);

// Ubah warna mobil jadi "hitam".
mobil.warna = "Hitam"
console.log(mobil);
// Ubah kelas siswa jadi "XI".
siswa.kelas = "XI"
console.log(siswa);
// Ubah umur hewan jadi 5.
hewan.umur = 5
console.log(hewan);
// Ubah tahun film jadi 2024
film.tahun = 2024
console.log(film);
// Ubah password akun jadi "rahasia123".
akun.password = "rahasia123"
console.log(akun);


// Hapus harga dari mobil
delete mobil.harga
console.log(mobil);
// Hapus alamat dari siswa.
delete siswa.alamat
console.log(siswa);
// Hapus makanan dari hewan.
delete hewan.makanan
console.log(hewan);
// Hapus genre dari film.
delete film.genre
console.log(film);
// Hapus email dari akun.
delete akun.email
console.log(akun);

// Loop semua isi mobil.
for (let key in mobil) {
    console.log(key + ": " + mobil[key]);
}
// Loop semua isi siswa.
for (let key in siswa) {
    console.log(key + ": " + siswa[key]);
}
// Loop semua isi hewan.
for (let key in hewan) {
    console.log(key + ": " + hewan[key]);
}
// Loop semua isi film.
for (let key in film) {
    console.log(key + ": " + film[key]);
}
// Loop semua isi akun.
for (let key in akun) {
    console.log(key + ": " + akun[key]);
}


// Buat object buku dengan properti: judul, pengarang, tahunTerbit.
let buku = {
    judul : "Laskar Pelangi",
    pengarang : "Andrea Hirata",
    tahunTerbit : 2005
};
// Tambahkan properti penerbit.
buku.penerbit = "Bentang Pustaka"
// Ubah nilai tahunTerbit.
buku.tahunTerbit = 2024
// Hapus pengarang.
delete buku.pengarang
// Tampilkan semua isi object dengan looping.
for (let key in buku) {
    console.log(key + ": " + buku[key]);
}

// Buat program bukuFavorit yang:

// Menyimpan judul, pengarang, tahunTerbit.
let bukuFavorit = {
    judul : "Atomic Habits",
    pengarang : "James Clear",
    tahunTerbit : 2018
};
// Menambah properti penerbit.
bukuFavorit.penerbit = "Avery"
// Mengubah tahunTerbit.
bukuFavorit.tahunTerbit = 2020
// Menghapus pengarang.
delete bukuFavorit.pengarang
// Menampilkan semua isi object.
for (let key in bukuFavorit) {
    console.log(key + ": " + bukuFavorit[key]);
}

    