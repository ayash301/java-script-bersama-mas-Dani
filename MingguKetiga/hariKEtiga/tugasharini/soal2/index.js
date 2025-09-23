function tambah(x, y) {
  return new Promise((resolve) => resolve(x + y));
}

function kali(x, y) {
  return new Promise((resolve) => resolve(x * y));
}

// chaining
tambah(5, 7)
  .then((hasilTambah) => {
    console.log("Hasil tambah:", hasilTambah);
    return kali(hasilTambah, 3);
  })
  .then((hasilKali) => {
    console.log("Hasil akhir:", hasilKali);
  });