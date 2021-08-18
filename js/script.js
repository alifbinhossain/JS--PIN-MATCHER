/* ------------------- GENERATE NEW PIN & DISPLAY IT ON PAGE ------------------- */
function getPin() {
  let newPin = Math.round(Math.random() * 10000);
  if (String(newPin).length == 4) {
    return newPin;
  } else {
    return getPin();
  }
}

function generatePin() {
  let newPin = getPin();
  document.getElementById("input-pin").value = newPin;
}

/* ------------------------- INSERT NUMBER TO NUMBER FIELD ------------------------ */
let numberFieldValue = document
  .getElementById("number-body")
  .addEventListener("click", function (event) {
    let numberField = document.getElementById("number-field");
    let previousNumber = numberField.value;
    let newNumber = event.target.innerText;
    let currentNumber = previousNumber + newNumber;

    //conditions to add numbers on page
    if (isNaN(newNumber)) {
      if (newNumber == "C") {
        numberField.value = "";
      } else if (newNumber == "<") {
        numberField.value = numberField.value.slice(0, -1);
      }
    } else if (currentNumber.length <= 4) {
      numberField.value = currentNumber;
    }
  });

/* ----------- CLICK ON SUBMIT BUTTON TO GET VERIFICATION MESSAGE ----------- */
document.getElementById("submit-btn").addEventListener("click", function () {
  let generatedPin = document.getElementById("input-pin").value;
  let yourPin = document.getElementById("number-field").value;
  let verifiedMessage = document.getElementById("verified-message");
  let errorMessage = document.getElementById("error-message");

  //multiple case to display verification message
  if (generatedPin == yourPin) {
    verifiedMessage.style.display = "block";
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
    verifiedMessage.style.display = "none";
  }
});
