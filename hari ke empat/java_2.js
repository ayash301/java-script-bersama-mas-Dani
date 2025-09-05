// Fungsi untuk menyapa user.
function sapaUser() {
      console.log("Halo, selamat datang!");
    }
    sapaUser();

// Fungsi untuk menghitung luas persegi.
  function luasPersegi(sisi) {
      return sisi * sisi;
    }
    console.log(luasPersegi(8));

// Fungsi untuk menampilkan biodata.
  function biodata(nama, umur) {
      console.log("Nama:", nama);
      console.log("Umur:", umur);
    }
    biodata("Ayash", 19);

// Fungsi untuk mengecek bilangan ganjil/genap.
    function cekGanjilGenap(angka) {
      return angka % 2 === 0 ? "Genap" : "Ganjil";
    }
    console.log(cekGanjilGenap(9));

// Fungsi untuk mencetak daftar menu.
    function cetakMenu(menu) {
      for (let i = 0; i < menu.length; i++) {
        console.log(menu[i]);
      }
    }
    cetakMenu(["Nasi Goreng", "Mie Ayam", "Bakso"]);

// Fungsi hitung luas segitiga.
    let luasSegitiga = function(alas, tinggi) {
      return 0.5 * alas * tinggi;
    };
    console.log("Luas segitiga= " + luasSegitiga(15, 20));

// Fungsi hitung keliling lingkaran.
    let kelilingLingkaran = function(diameter) {
      return Math.PI * diameter;
    };
    console.log( "Keliling lingkaran= "+ kelilingLingkaran(20));

// Fungsi menambahkan dua angka.
    let tambah = function(a, b) {
    return a + b;
    };
    console.log ("hasil= "+ tambah (56, 45));

// Fungsi mengubah huruf jadi kapital.
     let kapital = function(teks) {
      return teks.toUpperCase();
    };
    console.log( "Nama= " + kapital("pondok it"));

// Fungsi menghitung diskon belanja.
    let diskon = function(harga, persen) {
    return harga - (harga * persen / 100);
    };
    console.log( "Diskon yang didapat RP." +diskon(20000, 25));

// Fungsi mengurangi angka.
    const kurang = (a, b) => a - b;
    console.log( "hasil= " + kurang(9, 5));

// Fungsi menghitung pajak.
    const pajak = (harga) => harga * 0.1;
    console.log( "Pajak yang harus di bayar sebesar RP." +pajak(50000000));

// Fungsi menampilkan salam.
    const salam = () => "Assalamualaikum";
    console.log(salam());

// Fungsi menghitung umur dari tahun lahir.
    const hitungUmur = (tahunLahir) => 2025 - tahunLahir;
    console.log("Umur gua= "+ hitungUmur(2006));

// Fungsi mengonversi suhu Celcius ke Fahrenheit.
    function konversiSuhu(celcius) {
    return (celcius * 9 / 5) + 32;
}

    const suhuC = 30;
    const suhuF = konversiSuhu(suhuC);
    console.log(`Suhu ${suhuC}°C = ${suhuF}°F`);

// Fungsi menghitung nilai rata-rata.
    function rataRata(a, b, c) {
      return (a + b + c) / 3;
    }
    console.log( "Rata-rata nilai= "+ rataRata(95, 90, 90));

// Fungsi menggabungkan dua string.
    function gabungString(s1, s2) {
      return s1 + " " + s2;
    }
    console.log(gabungString("Halo", "Temanku"));

// Fungsi mencari angka terbesar dari 2 angka.
    function terbesar(a, b) {
      return a > b ? a : b;
    }
    console.log("angka terbesar= "+ terbesar(90, 12));

// Fungsi menghitung luas lingkaran.
    function luasLingkaran(r) {
      return Math.PI * r * r;
    }
    console.log( "luas lingkaran= " +luasLingkaran(10));

// Fungsi menghitung gaji bersih setelah potongan.
    function gajiBersih(gaji, potongan) {
      return gaji - potongan;
    }
    console.log("gaji bersih yang didapatkan RP." + gajiBersih(3000000, 500000));