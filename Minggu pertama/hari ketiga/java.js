    // Menentukan apakah angka ganjil atau genap.
    const angka = 50;
    if (angka % 2 === 0) {
      console.log("Genap");
    } else {
      console.log("Ganjil");
    }

    // Menentukan apakah seseorang boleh masuk bioskop (usia > 17).
    const usia = 19;
    if (usia > 17) {
        console.log("boleh masuk");
    } else{
        console.log("dilarang masuk!!!!!!!!!!");
    }

    // Menentukan apakah suhu termasuk dingin, normal, atau panas.
    const suhu = 19;
    if (suhu < 20){
        console.log('suhu dingin')
    }
    else if (suhu <=30){
        console.log("suhu normal")
    }
    else{
        console.log("suhu panas")
    }

    // Mengecek login dengan username dan password.
    const username = "User"
    const password = 1234   
    if (username === "User" && password === 1234){
        console.log("login berhasil")
    } else{
        console.log("login gagal")
    } 

    // Mengecek apakah nilai ujian lulus atau tidak.
     const nilai = 80
     if (nilai > 70){
        console.log("LULUS")
     }
     else{
        console.log("GAGAL")
     }

// Menampilkan nama bulan dari angka (1–12).

const bulan = 12;
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

    // Menampilkan menu makanan berdasarkan pilihan nomor.
     const pilihan = 3;
    switch (pilihan) {
      case 1: console.log("Nasi Goreng"); break;
      case 2: console.log("Mie Ayam"); break;
      case 3: console.log("Bakso"); break;
      default: console.log("Menu tidak tersedia");
    }

    // Menentukan jenis kelamin (L/P).
     const gender = 'P';
    switch (gender) {
      case 'L': console.log("Laki-laki"); break;
      case 'P': console.log("Perempuan"); break;
      default: console.log("Jenis kelamin tidak valid");
    }

    // Menentukan tingkat pendidikan (SD, SMP, SMA).
     const tingkat = "SMA";
    switch (tingkat) {
      case "SD": console.log("Sekolah Dasar"); break;
      case "SMP": console.log("Sekolah Menengah Pertama"); break;
      case "SMA": console.log("Sekolah Menengah Atas"); break;
      default: console.log("Tingkat pendidikan tidak valid");
    }   

    // Menentukan status lampu lalu lintas (Merah, Kuning, Hijau).
     const lampu = "Merah";
    switch (lampu) {
      case "Merah": console.log("Berhenti"); break;
      case "Kuning": console.log("Siap-siap"); break;
      case "Hijau": console.log("Jalan"); break;
      default: console.log("Status tidak valid");
    }