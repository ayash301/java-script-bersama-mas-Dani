
document.getElementById("form1").addEventListener("submit", function(e){
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const usia = document.getElementById("usia").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const nohp = document.getElementById("nohp").value;

  // 16. Nama wajib
  if (nama === "") return alert("16. Nama wajib diisi");

  // 17. Usia minimal 18
  if (usia < 18) return alert("17. Usia minimal 18 tahun");

  // 18. Password minimal 8 karakter
  if (password.length < 8) return alert("18. Password minimal 8 karakter");

  // 19. Validasi email sederhana
  const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
  if (!emailRegex.test(email)) return alert("19. Email tidak valid");

  // 20. Nomor HP hanya angka
  if (isNaN(nohp)) return alert("20. Nomor HP hanya boleh angka");

});

document.getElementById("form2").addEventListener("submit", function(e){
  e.preventDefault();

  const password = document.getElementById("password2").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const tanggal = document.getElementById("tanggal").value;
  const username = document.getElementById("username").value;
  const loginUser = document.getElementById("loginUser").value;
  const loginPass = document.getElementById("loginPass").value;
  const setuju = document.getElementById("setuju").checked;
  const angka = document.getElementById("angka").value;
  const komentar = document.getElementById("komentar").value;
  const pilihan = document.getElementById("pilihan").value;
  const fileInput = document.getElementById("file");
  const file = fileInput.value;

  // 21. Password & confirm password sama
  if (password !== confirmPassword) return alert("21. Konfirmasi password tidak cocok");

  // 22. Tanggal tidak boleh lewat hari ini
  if (new Date(tanggal) > new Date()) return alert("22. Tanggal tidak boleh lebih dari hari ini");

  // 23. Username minimal 5 karakter huruf/angka
  const userRegex = /^[a-zA-Z0-9]{5,}$/;
  if (!userRegex.test(username)) return alert("23. Username minimal 5 karakter huruf/angka");

  // 24. Login form tidak boleh kosong
  if (!loginUser || !loginPass) return alert("24. Isi semua field login");

  // 25. Checkbox wajib dicentang
  if (!setuju) return alert("25. Harus setuju terlebih dahulu");

  // 26. Angka harus genap
  if (angka % 2 !== 0) return alert("26. Angka harus genap");

  // 27. Komentar maksimal 200 karakter
  if (komentar.length > 200) return alert("27. Komentar maksimal 200 karakter");

  // 28. Pilihan tidak boleh kosong
  if (pilihan === "") return alert("28. Harus pilih salah satu opsi");

  // 29. File upload hanya jpg/png
  if (!(file.endsWith(".jpg") || file.endsWith(".png"))) return alert("29. File harus .jpg atau .png");

  // 30. Semua valid
  alert("30. Form 16–30 sukses!");
});