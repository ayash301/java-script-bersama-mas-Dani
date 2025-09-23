import barang from "./barang.js";
export function tambahBarang(barangBaru){
    return [...barang,barangBaru]
}

export function cariBarang(nama) {
    return barang.find(item =>
        item.nama.toLowerCase() ===
    nama.toLowerCase())
}

export function hitungTotal(belanjaan) {
    return belanjaan.reduce((total, id) => {
        const item = barang.find(b => b.id === id)
        return item ? total + item.harga : total
    }, 0)
}

export function updateStok(id, jumlahBeli) {
    const item = barang.find(b=> b.id === id)
    if (!item) return "Barang kosong"

    let {stok} = item
    if (stok < jumlahBeli) return "Stok kurang"

    item.stok = stok - jumlahBeli
    return item;
}