const dateOfBirth = document.querySelector("#dateofbirth");
const luckyNumber = document.querySelector("#luckynumber");
const checkButton = document.querySelector("#check");
const displayOutput = document.querySelector("#output");

const handleEventListener = () => {
  const date = dateOfBirth.value;
  const numberToCheck = luckyNumber.value;
  if (date && numberToCheck) {
    const sumOfDate = CalculateSumOfDate(date);
    checkIsNumberLucky(sumOfDate, parseInt(numberToCheck));
  } else {
    showMessage("Please enter both the fields 😐😐");
  }
};

checkButton.addEventListener("click", handleEventListener);

const CalculateSumOfDate = (date) => {
  let sum = 0;
  date = date.replaceAll("-", "");
  for (let digit of date) {
    sum = sum + Number(digit);
  }
  return sum;
};

const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
  if (sumOfDate % numberToCheck === 0) {
    return showMessage(`${numberToCheck} is a lucky number!! 🥳 🥳 `);
  }
  showMessage(`${numberToCheck} is not lucky 😕..Please Try Some other Number`);
};

const showMessage = (message) => {
  displayOutput.innerText = message;
};
