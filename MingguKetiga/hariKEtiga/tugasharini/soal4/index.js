function login() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Login berhasil"), 1000);
  });
}

function pilihBarang() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Barang dipilih"), 1000);
  });
}

function bayar() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Pembayaran sukses"), 1000);
  });
}

// chaining
login()
  .then((res) => {
    console.log(res);
    return pilihBarang();
  })
  .then((res) => {
    console.log(res);
    return bayar();
  })
  .then((res) => {
    console.log(res);
  });