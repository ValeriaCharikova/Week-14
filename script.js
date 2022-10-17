function showMessage() {
  let userName = document.getElementById("userName").value;
  document.getElementById("text").innerHTML = "Привет, " + userName + "!";
}
function clearMessage() {
  document.getElementById("userName").value = "";
}

function calcSum() {
  let a = document.getElementById("firstNumber").value;
  let b = document.getElementById("secondNumber").value;
  document.getElementById("result").value = Number(a) + Number(b);
}
function calcSubtraction() {
  let a = document.getElementById("firstNumber").value;
  let b = document.getElementById("secondNumber").value;
  document.getElementById("result").value = a - b;
}
function calcMultiplication() {
  let a = document.getElementById("firstNumber").value;
  let b = document.getElementById("secondNumber").value;
  document.getElementById("result").value = a * b;
}
function calcDivision() {
  let a = document.getElementById("firstNumber").value;
  let b = document.getElementById("secondNumber").value;
  document.getElementById("result").value = a / b;
}

function select(sender) {
  sender.classList.add("selected");
}

function changeMeForward() {
  let catImg = document.getElementById("catImg");
  catImg.src =
    "https://images.unsplash.com/photo-1595752776689-aebef37b5d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8YmxhY2tfYW5kX3doaXRlfA%3D%3D&auto=format&fit=crop&w=500&q=60";
}
function changeMeBack() {
  let catImg = document.getElementById("catImg");
  catImg.src =
    "https://images.unsplash.com/photo-1512679269783-02f01134d2d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfDF8MHxibGFja19hbmRfd2hpdGV8&auto=format&fit=crop&w=500&q=60";
}
