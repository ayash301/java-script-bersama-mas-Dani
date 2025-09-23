import biodata from "./biodata.js";
import { tambah, kurang, kali, bagi } from "./math.js";
import produk from "../produk.json" with { type: "json" };
import { formatRupiah } from "./helper.js";
import { getAllUser, getUserById } from "./userService.js";
import { addTask, getAllTask, deleteTask } from "./taskService.js";
import { login, register } from "./auth.js";
import { getPosts } from "./postService.js";
import { rataRata, nilaiTertinggi, nilaiTerendah } from "./statistik.js";
import { getAllBooks, addBook, findBookByTitle } from "./libraryService.js";

console.log("===== 1. Biodata =====");
console.log(biodata);

console.log("\n===== 2. Operasi Matematika =====");
console.log("20 + 5 =", tambah(20, 5));
console.log("30 - 10 =", kurang(30, 10));
console.log("6 × 7 =", kali(6, 7));
console.log("50 ÷ 2 =", bagi(50, 2));

console.log("\n===== 3 & 4. Produk + Format Rupiah =====");
produk.forEach(p => {
  console.log(`Produk: ${p.nama}, Harga: ${formatRupiah(p.harga)}`);
});

console.log("\n===== 5. User Service =====");
console.log("Semua User:", getAllUser());
console.log("User ID=2:", getUserById(2));

console.log("\n===== 6. Task Service =====");
addTask("Belajar JS");
addTask("Baca buku");
addTask("Olahraga");
console.log("Semua Task:", getAllTask());
deleteTask(2);
console.log("Setelah hapus task id=2:", getAllTask());

console.log("\n===== 7. Auth =====");
console.log(login("mr.buss", "321312"));
console.log(register("iput", "qwerty"));

console.log("\n===== 8. Fetch Posts =====");
const posts = await getPosts();
posts.slice(0, 5).forEach(p => console.log(`Post #${p.id}: ${p.title}`));

console.log("\n===== 9. Statistik Nilai =====");
console.log("Rata-rata:", rataRata());
console.log("Tertinggi:", nilaiTertinggi());
console.log("Terendah:", nilaiTerendah());

console.log("\n===== 10. Library Service =====");
console.log("Semua Buku:", getAllBooks());
addBook({ id: 3, judul: "Negeri 5 Menara", penulis: "Ahmad Fuadi", tahun: 2009 });
console.log("Setelah tambah:", getAllBooks());
console.log("Pemberantas Koruptor':", findBookByTitle("Pemberantas Koruptor"));