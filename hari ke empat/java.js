

let input = prompt("Masukkan sebuah angka:");
if (input === null) {
  let keluar = confirm("Apakah anda yakin keluar?");
  if (keluar) {
    alert("Anda telah keluar dari program.");
  } else {
    location.reload();
  }
} else if (input.trim() ===      "") { 
  alert("Silahkan isi angka");
  location.reload();
} else if (!(Number(input))) {
  alert("Input bukan angka, silahkan masukkan angka yang benar.");
  location.reload();
} else {
  let angka = Number(input);
  if (angka % 2 === 0) {
    alert("Angka " + angka + " adalah GENAP");
  } else {
    alert("Angka " + angka + " adalah GANJIL");
  }
}