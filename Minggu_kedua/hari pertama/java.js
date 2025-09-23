//SOAl1
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(angka);

//SOAL2
let kaliLima = angka.map(function (n) {
    return n * 5;
});
console.log( "Dikali lima= " + kaliLima);

//SOAL3
let genap = angka.filter(function (n) {
    return n % 2 === 0;
});
console.log("cari angka genap= " + genap);

//SOAL4
let jumlah = angka.reduce(function(total, n) {
    return total + n;
}, 0);
console.log("Total semua penjumlahan angka 1-10 = " + jumlah);

//SOAL5
let cari = angka.find(function (n) {
    return n > 8;
});
console.log("cari angka lebih dari 8 = " + cari);

//SOAL6
let buah = ["apel", "mangga", "pisang", "durian", "jeruk"];
buah.forEach(function (n) {
    console.log("Nama buah: " + n);
});

//SOAL7
let harga = [1000, 2000, 5000, 10000];
let hargaNaik = harga.map(function (n) {
    return n + (n * 0.1)
})
console.log("Harganya naik 10% = " + hargaNaik);

//SOAL8
let umur = [12, 17, 20, 24, 30, 16, 14];
let dewasa = umur.filter(function (n) {
    return n > 17;
});
console.log("Umur yang >17 =",dewasa);

//SOAL9
let nilai = [80, 90, 75, 85, 95];
let TotalNilai = nilai.reduce(function(total, n) {
    return total + n;
}, 0);
console.log("Total nilai =",TotalNilai);

//SOAL10
let kursi = [5, 10, 15, 20, 25, 30];
let cariKursi = kursi.find(function (n) {
    return n > "15";
});
console.log("Cari kursi yang > 15 = " + cariKursi);