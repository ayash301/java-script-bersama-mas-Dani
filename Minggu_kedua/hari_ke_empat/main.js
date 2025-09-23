import { luasPersegi } from "./modul/persegi.js";
import { luasLingkaran } from "./modul/lingkaran.js";
import { besar } from "./modul/teks.js";
import { jamSekarang } from "./modul/waktu.js";
import salam from './modul/salam.js';
import versi, {hitung} from './modul/utils.js'



console.log("luas persegi 10= ", luasPersegi(10))
console.log("luas lingkran r=20 = ",luasLingkaran(20))
console.log(besar("teks besar"))
console.log("sekarang jam:",jamSekarang())
console.log(salam("ayash"))
console.log(versi())
console.log(hitung(2,4))
