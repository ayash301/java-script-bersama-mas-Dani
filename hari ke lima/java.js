// Buat variabel namaSekolah di global, lalu tampilkan di dalam fungsi.
const namaSekolah = "Rumah IT"
function main (){
    console.log(namaSekolah)
}
main()

// Buat variabel namaGuru di dalam fungsi, coba tampilkan di luar fungsi.
function guru (){
    const namaGuru = "jokwow"
    console.log(namaGuru)
}
guru()
    // console.log(namaGuru)   

// Buat perulangan for dengan let i, cek apakah i bisa dipakai di luar perulangan.
for (let i = 0; i < 20; i++) {
     console.log ("Di dalam=", i)
}
    // console.log (i)

// Bandingkan var dan let di dalam perulangan (lihat bedanya).
for (var v = 0; v < 5; v++) {} //dapat di akses di luar blok
    console.log (v)

for (let l = 0; l < 5; l++) {} //hanya dapat di akses di dalam blok
    // console.log (l)

// Buat dua fungsi berbeda, masing-masing punya variabel namaSiswa. Apakah mereka bisa saling ganggu?func
function angka1 () {
    const angkaGanjil = 1
    console.log(angkaGanjil)
}                               //tidak saling ganggu
function angka2 () {
    const angkaGanjil = 3
    console.log(angkaGanjil)
}
angka1()
angka2()

// Coba tampilkan variabel var sebelum didefinisikan.
console.log(a);
var a =5;
// Coba tampilkan variabel let sebelum didefinisikan.
// console.log(b);
// let b =6;
// Coba tampilkan variabel const sebelum didefinisikan.
// console.log(c)
// const c=7;
// Buat fungsi normal di bawah, lalu panggil di atas.
tampilHalo()    
    function tampilHalo () {
        console.log("halo")
    }   

// Buat fungsi versi panah (const halo = () => {}), panggil di atas. Apa bedanya?
// hallo ()
// const hallo = () => {
//     console.log("hallo!")
//}


// Buat fungsi buatCounter() yang setiap dipanggil nambah 1.
function buatCounter (){
    let hitung = 0;
    return function (){
        hitung++;
        console.log(hitung);
    }
}

let counter = buatCounter();
counter()
counter()
counter()   

// Buat fungsi buatTabungan() yang bisa menyimpan uang.
function buatTabungan (){
    let saldo = 0;
    return function (tambah){
     saldo+= tambah;
        console.log("saldo= "+ saldo)
    }
}

let tabungan = buatTabungan () 
tabungan(1000000)
tabungan(3000000)

// Buat fungsi buatKeranjangBelanja() yang bisa menambahkan barang baru.
function buatKeranjangBelanja() {
    let barang = [];
    return function (namaBarang) {
    barang.push (namaBarang)
    console.log("Isi keranjang", barang)
    }
}

let keranjang = buatKeranjangBelanja()
keranjang("indomie");
keranjang("kecap")

// Buat fungsi buatTimer() yang menyimpan detik setiap kali dipanggil.
function buatTimer(){
    let detik = 0
    return function () {
        detik++;
        console.log("Detik:", detik)
    }
}

let timer = buatTimer()
timer()
timer()


// Buat fungsi buatCatatanNama() yang bisa menambahkan nama siswa ke daftar.
function buatCatatanNama() {
    let nama = [];
    return function (namaSiswa) {
        nama.push (namaSiswa)
        console.log("Nama siswa: ", nama )
    }
}
let  siswa = buatCatatanNama()
siswa("agus")
siswa("anwar")          
siswa("asep")




    