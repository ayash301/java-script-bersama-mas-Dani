import { resolve } from "path"

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("User ditemukan"),
        1000)
    })
}

function getPosts() {
    return new Promise((resolve) => {
        setTimeout(()=> resolve("post ditemukan"),
        2000)
    })
}

function getComment () {
    return new Promise((resolve) => {
        setTimeout(()=> resolve("Komentar ditemukan"),
        1000)
    })
}

getUser()
.then((res) => {
    console.log(res)
    return getPosts()
})

.then((res)=> {
    console.log(res)
    return getComment()
})

.then((res)=> {
    console.log(res)
})