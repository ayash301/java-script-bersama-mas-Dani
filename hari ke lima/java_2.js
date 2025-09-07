//SOAL TEORI

// Apa fungsi utama JavaScript dalam sebuah website?
// a. Membuat struktur halaman
// b. Menambahkan gaya/tampilan
// c. Membuat website interaktif
// d. Menghubungkan ke database
//jawabannya yang 'C'

// Manakah yang termasuk framework JavaScript?
// a. React
// b. jQuery
// c. Lodash
// d. Bootstrap
//jawabannya yang 'A'

// Sebutkan 2 keunggulan JavaScript.
//bisa di jalanin hampir di semua website yang ada
//Menjadikan website kita lebih beranimasi dan interaktif dengan user

// Sebutkan 2 kelemahan JavaScript.
//Keamanan nya kureng karena bisa di akses publik
//garai mumet nyusun kodenya harus pake logika
//kinerja nya lebih lambah dari bahasa kode lainnya untuk project besar

// Apa perbedaan let dan const dalam mendeklarasikan variabel?
//let bisa di ubah sedangkan const nilai tetap ga bisa di otak atik

// Tipe data apa yang cocok digunakan untuk menyimpan:

// Nama lengkap siswa
// Status login (true/false)
//string atau "" untuk nama lengkap siswa
//bolean untuk status login

// Apa perbedaan == dengan === di JavaScript?
//bandingin nilainya aja tidak dengan tipenya == 'jika satu sudah memenuhi maka keadaannya true'
// bandingin kedua nya nilai dan tipenya === 'harus memenuhi dua keaadaan untuk memenuhi kondisi ture'

// Manakah dari pop-up berikut yang digunakan untuk meminta input teks dari user?
// a. alert()
// b. prompt()
// c. confirm()
// d. console.log()
//jawabannya "B"

// Apa itu hoisting dalam JavaScript? Jelaskan dengan singkat.
//hosting tuh kalo di analogikan kaya kita lagi laper terus mau makan ke warteg, disana makanannya udah siap mateng sebelum kita lapar
//jadi aturan java script yang mengangkat deklarasi atau variable ke atas sebelum kode di jalankan

// Apa yang dimaksud dengan closure? Berikan contoh sederhana dalam 1 kalimat.
// fungsi yg bisa di aksis di luar  scopenya.
//contohnya:
// function buatCounter (){
// let hitung = 0;
//return function (){
//hitung++;
//console.log(hitung)
//}

//}

// let counter = buatCounter ();
//counter ()
//counter ()
//counter ()

// Buat variabel nama, umur, statusPelajar. Tampilkan semuanya dengan console.log().
const nama = "Ayash"
const umur = 19
const statusPelajar = "aktif"
console.log(`Nama= ${nama}`)
console.log(`Umur= ${umur}`)
console.log(`Status Pelajar= ${statusPelajar}`)

// Buat variabel uangSaku = 50000, jajan = 15000, hitung sisa uangnya.
const uangSaku = 50000
const jajan = 15000
const sisaUang = uangSaku - jajan
console.log(sisaUang)

// Buat variabel sudahLogin = true. Cek apakah user sudah login, jika iya tampilkan "Selamat datang".
 const sudahLogin = true
 if (sudahLogin) {  
    console.log("selamat datang")
 }

// Buat variabel nilai = 75. Jika nilai ≥ 70 tampilkan "Lulus", jika tidak "Tidak Lulus".
const nilai = 100
if (nilai >= 70) {
    console.log("Kamu lulus")
} else{
    console.log("Kamu Gagal")
}

// Coba deklarasikan const angka = 10, lalu ubah nilainya. Apa hasilnya?
// const angka = 30 //errror jika di ubah nilainya karena const tidak bisa di ubah nilainya
 
// Buat program cek ganjil/genap dari angka tertentu.
let angka = 50
if (angka %2===0){
    console.log("genap")
} else {
    console.log("ganjil")
}

// Buat program yang menampilkan nama bulan sesuai angka (1–12) menggunakan switch.
const bulan = 10;
    switch (bulan) {
      case 1: console.log("Januari"); break;
      case 2: console.log("Februari"); break;
      case 3: console.log("Maret"); break;
      case 4: console.log("April"); break;
      case 5: console.log("Mei"); break;
      case 6: console.log("Juni"); break;
      case 7: console.log("Juli"); break;
      case 8: console.log("Agustus"); break;
      case 9: console.log("September"); break;
      case 10: console.log("Oktober"); break;
      case 11: console.log("November"); break;
      case 12: console.log("Desember"); break;
      default: console.log("Bulan tidak valid");
    }

// Buat program untuk mencetak angka 1 sampai 20 dengan for.
const angka1 = 20
for(let i = 1; i <=20; i++){
    console.log("angka-" + i)
}
// Buat program untuk mencetak bilangan kelipatan 5 dari 1–50.
for (let q = 1; q <=50; q++){
    if(q %5===0) {
        console.log(q)
    }
}
// Buat program yang terus meminta input password hingga benar (while).
 let input;
    const passwordBenar = "1234";
    while (input !== passwordBenar) {
      input = prompt("Masukkan password:");
    }
    console.log("Password benar!");

// Buat fungsi sapa(nama) yang menampilkan "Halo, [nama]!".
function sapa(Ayash) {
  console.log("Halo, " + Ayash + "!");
}
sapa("Ayash");

// Buat fungsi hitungLuasSegitiga(alas, tinggi) yang mengembalikan hasilnya.
function hitungLuasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;

}
console.log(hitungLuasSegitiga (4, 5) )

// Buat fungsi cekUmur(umur) → tampilkan "Dewasa" jika ≥ 18, "Anak-anak" jika < 18.
function cekUmur (umur){
    if (umur >= 18){
        console.log("dewasa")
    } else {
        console.log("balita")
    }
}
cekUmur(20)

// Buat fungsi ekspresi untuk menghitung diskon belanja.
const hitungDiskon = function(total, persen) {
  return total - (total * persen / 100);
};
console.log(hitungDiskon(100000, 10));

// Buat arrow function untuk menghitung konversi suhu Celcius ke Fahrenhei
const toFahrenheit = celcius => celcius * 9/5 + 32;
console.log(toFahrenheit(30));

// Buat variabel sekolah di global, tampilkan di dalam fungsi.
let sekolah = "SMA 1";
function tampilkanSekolah() {
  console.log(sekolah);
}
tampilkanSekolah();

// Buat variabel guru di dalam fungsi, coba tampilkan di luar fungsi. Apa yang terjadi?
function dataGuru() {
  let guru = "Pak Budi";
  console.log(guru);
}
dataGuru();

// Coba tampilkan variabel var sebelum dideklarasikan. Apa hasilnya?
console.log(ANGKA); 
var ANGKA = 10;

// Buat fungsi buatCounter() yang tiap kali dipanggil menambah angka +1 (gunakan closure).
function buatCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}
let counter = buatCounter();
console.log(counter()); 
console.log(counter()); 

// Buat fungsi pencatatanPengeluaran() yang menyimpan total pengeluaran dengan closure.
function pencatatanPengeluaran() {
  let total = 0;
  return function(nominal) {
    total += nominal;
    return total;
  }
}
let catat = pencatatanPengeluaran();
console.log(catat(5000)); 
console.log(catat(2000)); 