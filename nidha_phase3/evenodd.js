function check() {
  let num = document.getElementById("num").value;

  if (num % 2 === 0) {
    document.getElementById("result").innerText = "Even";
  } else {
    document.getElementById("result").innerText = "Odd";
  }
}