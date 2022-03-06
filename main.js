const firstNum = document.querySelector(".first-number");
const secondNum = document.querySelector(".second-number");
const symbol = document.querySelector(".symbol");
const secretNumber = document.querySelector(".secret");
const main = document.querySelector(".display");
const answerOne = document.querySelector(".answer-1");
const answerTwo = document.querySelector(".answer-2");
const answerThree = document.querySelector(".answer-3");
const answerChecker = document.querySelector(".answer-checker");

let result;
///GENERATING RANDOM NUMBER
const buttons = [answerOne, answerTwo, answerThree];
const init = () => {
  const randomGenerator = function () {
    let randomNumberFirst = Math.trunc(Math.random() * 20) + 1;
    let randomNumberSecond = Math.trunc(Math.random() * 20) + 1;
    firstNum.textContent = randomNumberFirst;
    secondNum.textContent = randomNumberSecond;

    if (symbol.textContent === "+") {
      result = randomNumberFirst + randomNumberSecond;
    } else if (symbol.textContent === "-") {
      result = randomNumberFirst - randomNumberSecond;
    } else if (symbol.textContent === "x") {
      result = randomNumberFirst * randomNumberSecond;
    } else if (symbol.textContent === "/") {
      result = randomNumberFirst / randomNumberSecond;
    }

    return result.toFixed();
  };
  result = randomGenerator();

  const randomNumberFirst = Math.trunc(Math.random() * 20) + 1;
  const randomNumberSecond = Math.trunc(Math.random() * 20) + 1;
  const wrongNumbers = [randomNumberFirst, randomNumberSecond];

  const randomNumber = Math.trunc(Math.random() * 3);
  buttons[randomNumber].textContent = result;
  let i = 0;
  while (i < wrongNumbers.length) {
    for (const iterator of buttons) {
      if (iterator.textContent == result) {
        continue;
      } else {
        iterator.textContent = wrongNumbers[i];
        i++;
      }
      // console.log(i);
    }
  }
};
init();
answerOne.addEventListener("click", function () {
  if (this.textContent == result) {
    answerChecker.textContent = "Good Job!👍";
    setTimeout(function () {
      answerChecker.textContent = "What is the answer?";
    }, 1000);
    init();
  } else {
    answerChecker.textContent = "Wrong Answer!👎";
  }
});
answerTwo.addEventListener("click", function () {
  if (this.textContent == result) {
    answerChecker.textContent = "Good Job! 👍";
    setTimeout(function () {
      answerChecker.textContent = "What is the answer?";
    }, 1000);
    init();
  } else {
    answerChecker.textContent = "Wrong Answer!👎";
  }
});
answerThree.addEventListener("click", function () {
  if (this.textContent == result) {
    answerChecker.textContent = "Good Job!👍";
    setTimeout(function () {
      answerChecker.textContent = "What is the answer?";
    }, 1000);
    init();
  } else {
    answerChecker.textContent = "Wrong Answer!👎";
  }
});
