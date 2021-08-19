var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var btnCheck = document.querySelector("#btn-check");
var output = document.querySelector("#output-div");
var showDiv = document.querySelectorAll(".show-div");
var btnContinue = document.querySelector("#btn-continue");

btnCheck.addEventListener("click", checkBirthdateIsLucky);
btnContinue.addEventListener("click", continueBtnHandler);
btnCross.addEventListener("click", crossBtnHandler);

function continueBtnHandler() {
  let birthdayDate = dateOfBirth.value;
  if (birthdayDate) {
    showDiv[0].style.display = "block";
    showDiv[1].style.display = "block";
  } else {
    output.innerText =
      "You literally had one job, please enter your birthdate!!";
  }
}

function checkBirthdateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = getSum(dob);
  const luckNum = luckyNumber.value;

  if (luckNum) {
    if (sum % luckNum === 0) {
      output.innerText = "Damn Lucky!🥳";
    } else {
      output.innerText =
        "O oo!, We aren't Google Pay but Better luck in next birth!😭";
    }
  } else {
    output.innerText = "Please enter your Lucky Number";
  }
}

function getSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}
