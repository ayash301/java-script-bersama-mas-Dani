// Buat fungsi `luasPersegi(sisi)` yang mengembalikan hasil sisi × sisi 
    function luasPersegi(sisi) {
    return sisi * sisi;}
    console.log("Luas persegi adalah= "+ luasPersegi(5));  

// Buat fungsi untuk menghitung jumlah 3 angka
    function jumlahTigaAngka(a, b, c) {
    return a + b + c;}
    console.log("Jumlah total= " +jumlahTigaAngka (5, 6, 90))

// Buat fungsi `isEven(angka)` yang mengembalikan true jika angka
// genap, false jika ganjil
    function isEven(angka) {
    return angka % 2 === 0;
    }
    console.log(isEven(4)); 
    console.log(isEven(5));

// Buat fungsi `konversiSuhu(celcius)` yang mengembalikan nilai suhu dalam
// Fahrenheit.
function konversiSuhu(celcius) {
    return (celcius * 9 / 5) + 32;
}

const suhuC = 30;
const suhuF = konversiSuhu(suhuC);
console.log(`Suhu ${suhuC}°C = ${suhuF}°F`);
