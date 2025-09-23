const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
const amount = document.getElementById("amount");
const from = document.getElementById("from");
const to = document.getElementById("to");
const convertBtn = document.getElementById("convert");
const result = document.getElementById("result");

// --- kalkulator ---
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else if (value === "√") {
      display.value = Math.sqrt(eval(display.value));
    } else if (value === "^") {
      display.value += "**"; // pangkat
    } else if (value === "%") {
      display.value = eval(display.value) / 100;
    } else if (value === "sin") {
      display.value = Math.sin(eval(display.value) * Math.PI / 180).toFixed(4);
    } else if (value === "cos") {
      display.value = Math.cos(eval(display.value) * Math.PI / 180).toFixed(4);
    } else if (value === "tan") {
      display.value = Math.tan(eval(display.value) * Math.PI / 180).toFixed(4);
    } else if (value === "log") {
      display.value = Math.log10(eval(display.value)).toFixed(4);
    } else {
      display.value += value;
    }
  });
});

// --- konversi mata uang ---
// nilai tukar sederhana (dummy, bisa dihubungkan API realtime)
const rates = {
  "USD": { "IDR": 15000, "EUR": 0.92, "JPY": 150 },
  "IDR": { "USD": 0.000067, "EUR": 0.000061, "JPY": 0.010 },
  "EUR": { "USD": 1.09, "IDR": 16500, "JPY": 160 },
  "JPY": { "USD": 0.0067, "IDR": 100, "EUR": 0.0063 }
};

convertBtn.addEventListener("click", () => {
  const amt = parseFloat(amount.value);
  if (isNaN(amt)) {
    result.textContent = "Masukkan angka yang valid!";
    return;
  }

  if (from.value === to.value) {
    result.textContent = `${amt} ${from.value} = ${amt} ${to.value}`;
    return;
  }

  const rate = rates[from.value][to.value];
  const converted = (amt * rate).toFixed(2);
  result.textContent = `${amt} ${from.value} = ${converted} ${to.value}`;
});
