
// LATIHAN MANDIRI

let usia = 26; 

if (usia < 13) {
  console.log("Anak-anak");
} else if (usia < 25) {
  console.log("Remaja");
} else {
  console.log("Dewasa");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}


function getDayName(dayNumber) {
  switch(dayNumber) {
    case 1: return "Senin";
    case 2: return "Selasa";
    case 3: return "Rabu";
    case 4: return "Kamis";
    case 5: return "Jumat";
    case 6: return "Sabtu";
    case 7: return "Minggu";
    default: return "Nomor hari tidak valid";
  }
}
console.log(getDayName(1)); 


// STUDI KASUS HARI KETIGA

// Nilai yang ingin dicek (ganti sesuai kebutuhan)
let nilai = 93;

let grade = "";
let keterangan = "";

if (nilai >= 90) {
  grade = "A";
  keterangan = "Beautiful, Amazing!!";
} else if (nilai >= 80) {
  grade = "B";
  keterangan = "Kece dan keren";
} else if (nilai >= 70) {
  grade = "C";
  keterangan = "Mayan lah";
} else if (nilai >= 60) {
  grade = "D";
  keterangan = "Ga pinter";
} else {
  grade = "E";
  keterangan = "Tolol";
}

console.log(`Nilai kamu: ${grade} (${keterangan})`);