function progress(step) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Progress: ${step}%`), 500);
  });
}

// chaining
progress(25)
  .then((res) => {
    console.log(res);
    return progress(50);
  })
  .then((res) => {
    console.log(res);
    return progress(75);
  })
  .then((res) => {
    console.log(res);
    return progress(100);
  })
  .then((res) => {
    console.log(res);
    console.log("Selesai!");
  }); 