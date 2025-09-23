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



// Ambil nilai dari array [10, 20, 30] jadi variabel x, y, z.
let arr = [10, 20, 30];
let [x, y, z] = arr;
console.log(x, y, z); 

// Ambil nilai pertama dan kedua dari array ["apel", "jeruk", "mangga"]
let fruits = ["apel", "jeruk", "mangga"];
let [first, second] = fruits;
console.log(first, second);

// Ambil nilai pertama dan sisanya dari array [5, 6, 7, 8].
let numbers = [5, 6, 7, 8];
let [firstNum, ...rest] = numbers;
console.log(firstNum); 
console.log(rest);

// Destructuring array [100, 200] jadi satu dan dua.
let nums = [100, 200];
let [satu, dua] = nums;
console.log(satu, dua);
// Destructuring array [true, false, true] jadi t1, t2, t3.
let bools = [true, false, true];
let [t1, t2, t3] = bools;
console.log(t1, t2, t3);

// Destructuring object { nama: "Budi", umur: 17 }.
let person = { nama: "Budi", umur: 17 };
let { nama, umur } = person;
console.log(nama, umur);

// Ambil judul dan pengarang dari object { judul: "Buku A", pengarang: "Andi" }.
let book = { judul: "Tragedi Pondok IT", pengarang: "Andi" };
let { judul, pengarang } = book;
console.log(judul,);
console.log(pengarang);
// Ambil merk dari object { merk: "Honda", warna: "merah" }
let car = { merk: "Honda", warna: "merah" };
let { merk, warna } = car;
console.log(merk);

// Destructuring { username: "danz", password: "123" }.
let account = { username: "Ayash", password: "301" };
let { username, password } = account;
console.log(username, password);
// Ambil nama dan kelas dari { nama: "Siti", kelas: "XI" }.
let student = { nama: "Mulyono", kelas: "XII" };
let { nama: studentName, kelas: studentClass } = student;
console.log(studentName, studentClass);

// Gabungkan [1, 2] dengan [3, 4].
let array1 = [1, 2];
let array2 = [3, 4];
let penggabungan = [...array1, ...array2];
console.log(penggabungan);


// Copy array [10, 20, 30] ke array baru.
let originalArray = [10, 20, 30];
let copiedArray = [...originalArray];
console.log(copiedArray);
// Gabungkan object { a: 1 } dengan { b: 2 }.
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);
// Spread array [5, 6, 7] ke console.log.
let arrToSpread = [5, 6, 7];
console.log(...arrToSpread);
// Gabungkan array ["a", "b"] dan ["c", "d"].
let letters1 = ["a", "b"];
let letters2 = ["c", "d"];
let combinedLetters = [...letters1, ...letters2];
console.log(combinedLetters);

// Buat function tambah yang bisa nerima banyak angka.
function tambah(...angka) {
    return angka.reduce((total, k) => total + k, 0);
}
console.log(tambah(1, 2, 3, 4, 5)); 
console.log(tambah(10, 20)); 
console.log(tambah(7, 14, 21));
// Buat function cetak yang nerima banyak string dan print satu-satu.
function cetak(...strings) {
    strings.forEach(str => console.log(str));
}
cetak("Halo", "Dunia", "Ini", "JavaScript");
// Buat function kalikan semua angka yang masuk.
function kalikan(...numbers) {
    return numbers.reduce((product, q) => product * q, 1);
}
console.log(kalikan(1, 2, 3, 4));
// Buat function gabungKalimat yang nerima banyak kata jadi 1 kalimat.
function gabungKalimat(...words) {
    return words.join(' ');
} 
console.log(gabungKalimat("Saya", "suka", "ngoding"));  
// Buat destructuring array [1,2,3,4,5] jadi awal dan ...sisa.
let angkaArray = [1, 2, 3, 4, 5];
let [awal, ...sisa] = angkaArray;
console.log(awal); 
console.log(sisa);

// Gunakan destructuring array untuk ambil nilai [1, 2, 3, 4].
let nilaiArray = [1, 2, 3, 4];
let [n1, n2, n3, n4] = nilaiArray;
console.log(n1, n2, n3, n4);
// Buat object mobil dan destructuring merek dan tahun.
let Mobil = { merek: "Suzuki", tahun: 2020 };
let { merek, tahun } = Mobil;
console.log(merek, tahun);
// Gabungkan dua array pakai spread operator.
let arrA = [1, 2];
let arrB = [3, 4];
let gabunganArr = [...arrA, ...arrB];
console.log(gabunganArr);
// Buat function yang nerima banyak angka lalu jumlahkan pakai rest.
function jumlahkan(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(jumlahkan(5, 10, 15));


// Object { nama: "Dewi", umur: 16, kelas: "XI" }.
let murid = { nama: "Boboboi", umur: 17, kelas: "XI" };

// Pisahkan nama dan kelas dengan destructuring.
let { nama: studentName2, kelas: studentClass2 } = murid;
console.log(studentName2); 
console.log(studentClass2);
// Tambahkan properti baru hobi pakai spread.
let muridDenganHobi = { ...murid, hobi: "Membaca" };
console.log(muridDenganHobi);
// Buat function yang menerima nilai ujian (banyak angka) lalu hitung totalnya dengan rest.
function totalNilai(...nilai) {
    return nilai.reduce((total, n) => total + n, 0);
}
console.log(totalNilai(80, 90, 85));
// Tampilkan hasil akhir ke console.
console.log("Total nilai ujiannya: " + totalNilai(80, 90, 85));
