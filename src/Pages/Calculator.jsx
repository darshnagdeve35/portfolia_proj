import { useState } from "react";
import "./../Calculator.css";

function Calculator() {
  const [currentNumber, setnumber] = useState("0");

  function setInputNumber(event) {
    const id = event.currentTarget.id;
    const inputNumber = currentNumber == 0 ? id : currentNumber + id;
    setnumber(inputNumber);
  }

  function setArithmeticSign(sign) {
    if (!checkLastChar) {
      setnumber(currentNumber + " " + sign);
    } else {
      setnumber(currentNumber + " " + sign + " ");
    }
  }
  function calculateResult() {
    const expression = currentNumber.replace(/x/g, "*");
    const result = eval(expression);
    setnumber(result);
  }

  function removeChar() {
    const lastChar = currentNumber[currentNumber.length - 1];
    let newNumber;

    if (lastChar === " ") {
      newNumber = currentNumber.slice(0, -3); // Remove the arithmetic sign and the space
    } else {
      newNumber = currentNumber.slice(0, -1); // Remove the last character
    }

    setnumber(newNumber); // Update the state with the modified number
  }

  function allClear() {
    setnumber("0");
  }

  function checkLastChar() {
    const lastChar = currentNumber[currentNumber.length - 1];
    const char = ["x", "+", "-"];
    return lastChar.includes(char);
  }

  return (
    <>
      <div className="container">
        <div className="form-container">
          <input type="text" value={currentNumber} readOnly />
          <form action="">
            <button type="button" id="1" onClick={setInputNumber}>
              1
            </button>
            <button type="button" id="2" onClick={setInputNumber}>
              2
            </button>
            <button type="button" id="3" onClick={setInputNumber}>
              3
            </button>
            <button
              type="button"
              onClick={() => {
                setArithmeticSign("x");
              }}
            >
              x
            </button>
            <br />
            <button type="button" id="4" onClick={setInputNumber}>
              4
            </button>
            <button type="button" id="5" onClick={setInputNumber}>
              5
            </button>
            <button type="button" id="6" onClick={setInputNumber}>
              6
            </button>
            <button
              type="button"
              onClick={() => {
                setArithmeticSign("+");
              }}
            >
              +
            </button>
            <br />
            <button type="button" id="7" onClick={setInputNumber}>
              7
            </button>

            <button type="button" id="7" onClick={setInputNumber}>
              8
            </button>
            <button type="button" id="9" onClick={setInputNumber}>
              9
            </button>
            <button type="button" id="0" onClick={setInputNumber}>
              0
            </button>

            <br />
            <button
              type="button"
              onClick={() => {
                setArithmeticSign("-");
              }}
            >
              -
            </button>
            <button
              type="button"
              onClick={() => {
                calculateResult();
              }}
            >
              =
            </button>
            <button
              type="button"
              onClick={() => {
                removeChar();
              }}
            >
              rm
            </button>
            <button
              type="button"
              onClick={() => {
                allClear();
              }}
            >
              cl
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Calculator;
