function cekNama(nama) {
  return new Promise((resolve, reject) => {
    if (nama) {
      resolve("Nama valid");
    } else {
      reject("Nama tidak boleh kosong");
    }
  });
}

function cekEmail(email) {
  return new Promise((resolve, reject) => {
    if (email.includes("@")) {
      resolve("Email valid");
    } else {
      reject("Email tidak valid");
    }
  });
}

// chaining + catch
cekNama("Danz")
  .then((res) => {
    console.log(res);
    return cekEmail("danz@example.com");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Error:", err);
  });