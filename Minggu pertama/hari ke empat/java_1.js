// Cetak angka 1 sampai 100.
const angka =100
for( let i = 1; i <= 100; i++) {
    console.log("angka ke-" + i)
}

// Cetak semua bilangan genap dari 1 sampai 50.
for( let i = 2; i <= 50; i+=2){
    console.log(i)
}

// Hitung jumlah dari angka 1 sampai 10.
let total = 0;
for (let i = 1; i <= 10; i++) {
    total +=i;
}
console.log("jumlah:", total);

// Buat tabel perkalian 5.
for( let i= 1; i <= 10; i++) {
    console.table("5 * " + i + "=" + (5 * i));
}

// Cetak bintang membentuk segitiga.
let n = 5;
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}

// Terus minta password sampai benar.
 let input;
    const passwordBenar = "ayash";
    while (input !== passwordBenar) {
      input = prompt("Masukkan password:");
    }
    console.log("Password benar!");

// Jalan terus sampai bensin habis.
 let bensin = 5;
    while (bensin > 0) {
      console.log("Mobil berjalan, bensin tersisa:", bensin);
      bensin--;
    }
    console.log("Bensin habis, mobil berhenti.");

// Ulangi lempar dadu sampai dapat angka 6.
   let dadu;
    while (dadu !== 6) {
      dadu = Math.ceil(Math.random() * 6);
      console.log("Lempar dadu:", dadu);} 

// Terus tambah uang tabungan sampai cukup untuk beli barang.
  let tabungan = 1000000;
    const hargaBarang = 1500000;
    while (tabungan < hargaBarang) {
      tabungan += 200000;
      console.log("Tabungan sekarang:", tabungan);
    }
    console.log("Tabungan cukup untuk beli barang!");

// Ulangi proses input sampai user mengetik "stop".
 let teks = "";
    while (teks !== "stop") {
      teks = prompt("Ketik sesuatu (stop untuk berhenti):");
    }