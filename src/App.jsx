import moonIcon from "./assets/moon.png";
import sunIcon from "./assets/sun.png";
import { Header } from "./Component/Headers/Header";
import { KeyPad } from "./Component/KeyPad/KeyPad";
import "./App.css";
import { useState, useEffect } from "react";

export const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  // ✅ KeyCodes allowed for keyboard input
  const usedKeyCodes = [
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
    96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
    8, 13, 190, 187, 189, 191, 111, 106, 107, 109,
  ];

  // ✅ Allowed characters
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operators = ["-", "+", "*", "/"];

  // ✅ Calculate result safely
  const calculateResult = (exp) => {
    if (!exp) return;

    let expressionToEval = exp;
    const lastChar = exp.slice(-1);

    // Agar last character operator ya '.' ho, toh remove karo
    if (operators.includes(lastChar) || lastChar === ".") {
      expressionToEval = exp.slice(0, -1);
    }

    try {
      const answer = eval(expressionToEval);
      const formatted = Number.isInteger(answer)
        ? answer
        : answer.toFixed(2);
      setResult(formatted);
    } catch (err) {
      setResult("Error");
    }
  };

  // ✅ Handle key press (from keyboard or button)
  const handleKeyPress = (keyCode, key) => {
    // Convert UI operators to JS operators
    if (key === "×") key = "*";
    if (key === "÷") key = "/";

    // Block unwanted keys
    if (!keyCode) return;
    if (!usedKeyCodes.includes(keyCode) && !operators.includes(key)) return;

    // 👉 Numbers
    if (numbers.includes(key)) {
      if (key === "0" && expression.length === 0) return;
      const newExp = expression + key;
      setExpression(newExp);
      calculateResult(newExp);
    }

    // 👉 Operators
    else if (operators.includes(key)) {
      if (!expression) return;
      const lastChar = expression.slice(-1);
      if (operators.includes(lastChar) || lastChar === ".") return;
      const newExp = expression + key;
      setExpression(newExp);
    }

    // 👉 Decimal
    else if (key === ".") {
      if (!expression) return;
      const lastChar = expression.slice(-1);
      if (!numbers.includes(lastChar)) return;
      const newExp = expression + key;
      setExpression(newExp);
    }

    // 👉 Backspace
    else if (keyCode === 8) {
      if (!expression) return;
      const newExp = expression.slice(0, -1);
      setExpression(newExp);
      calculateResult(newExp);
    }

    // 👉 Enter (=)
    else if (keyCode === 13) {
      if (!expression) return;
      calculateResult(expression);
     const tempHistory = [...history];
    if (tempHistory.length > 20) tempHistory.splice(0, 1);
     tempHistory.push(expression);
     setHistory(tempHistory);


    }
  };

  // ✅ Allow global keyboard input
  useEffect(() => {
    const handleKeyDown = (event) => {
      handleKeyPress(event.keyCode, event.key);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="app" data-theme={isDarkMode ? "dark" : ""}>
      <div className="app_calculator">
        {/* Navbar */}
        <div className="app_calculator_navbar">
          <div className="app_calculator_toggle">
            <div
              className="app_calculator_navbar_toggle"
              onClick={() => setDarkMode(!isDarkMode)}
            >
              <div
                className={`app_calculator_navbar_toggle_circle${
                  isDarkMode
                    ? " app_calculator_navbar_toggle_circle_active"
                    : ""
                }`}
              ></div>
            </div>
          </div>
          <img src={isDarkMode ? moonIcon : sunIcon} alt="mode" />
        </div>

        {/* Header and Keypad */}
        <Header expression={expression} result={result} history={history}/>
        <KeyPad handleKeyPress={handleKeyPress} />
      </div>
    </div>
  );
};
