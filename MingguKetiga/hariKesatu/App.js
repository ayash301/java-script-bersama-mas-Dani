import {prayerTime} from "./components/prayerTime.js"

const apiprayeerTIme = await prayerTime()
const jadwals = apiprayeerTIme.jadwal.data.jadwal
const lokasi = apiprayeerTIme.location

const prayerTimes = [
    {name: "subuh", jadwal: jadwals.subuh},
    {name: "dzuhur", jadwal: jadwals.dzuhur},
    {name: "ashar", jadwal: jadwals.ashar},
    {name: "maghrib", jadwal: jadwals.maghrib},
    {name: "isya", jadwal: jadwals.isya},
]

function render() {
    const prayerTime = document.getElementById("prayerTime")
    prayerTime.innerHTML = ""
}

console.table(prayerTimes)

render()
