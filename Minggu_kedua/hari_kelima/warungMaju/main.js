import barang from "./barang.js"
import { tambahBarang, cariBarang, hitungTotal, updateStok } from "./utils.js"

//tambah barang anyar
console.log("tambah barang:", tambahBarang({ id:
    4, nama: "Rokok", harga:27000, stok:12
}))

//nggolek barang
console.log("cari barang:", cariBarang("Kopi"))

//hitung total belanjaku
let belanjaan = [1,2,3]
console.log("total harga:", hitungTotal(belanjaan))

//update stok
console.log("update stok terbaru:", updateStok(1,2))

//promo!!!!!!1
let hitung = 0
const promo = setInterval(() => {
    hitung++
    console.log("PROMOOO 50% LENGG")

    if (hitung === 5){
        clearInterval(promo)
        console.log("PROMOOO HABIS,ANDA TELAT!!")
    }
}, 3000)


