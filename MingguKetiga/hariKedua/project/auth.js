import fs from "fs";
import users from "../user.json" with { type: "json" };

export function login(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  return user ? "Login sukses!" : "Username atau password salah.";
}

export function register(username, password) {
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  fs.writeFileSync("../user.json", JSON.stringify(users, null, 2));
  return "User berhasil ditambahkan!";
} 