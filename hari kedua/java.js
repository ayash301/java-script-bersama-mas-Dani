let nama = 'ayash';
let umur = 19;
let hobi = 'membaca';
let Status = "siswa";

console.log('===Biodata Sederhana===');
console.log(`nama: ${nama}`);
console.log(`umur: ${umur}`);
console.log(`hobi: ${hobi}`);
console.log(`Status: ${Status}`);

let buah = ["Apel", "Jeruk","Mangga", "Pepaya", "Nangka"]
console.table(buah);


let user = prompt ("Ayash");
if (user) {
    alert(`hallo, ${user} selamat datang`)
}


let konfirmasi = confirm("Apa lu yakin mau hapus ni data");
if(konfirmasi){
    console.log("Data udah di hapus");
}
else{
    console.log("Data gajadi di hapus");
}

if(!user) {
    console.error("Error: Data lu gaboleh kosong!");

}