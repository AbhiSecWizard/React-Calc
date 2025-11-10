import "./KeyPad.css";

export const KeyPad = (props) => {

  const keys = [
    { keyCode: 55, label: "7" },
    { keyCode: 56, label: "8" },
    { keyCode: 57, label: "9" },
    { keyCode: 52, label: "4" },
    { keyCode: 53, label: "5" },
    { keyCode: 54, label: "6" },
    { keyCode: 49, label: "1" },
    { keyCode: 50, label: "2" },
    { keyCode: 51, label: "3" }, // fixed from 52 to 51
    { keyCode: 48, label: "0" },
    { keyCode: 46, label: "." },
    { keyCode: 187, label: "=" },
  ];

  const symbols = [
    { label: "⌫", keyCode: 8, value: "backspace" },
    { label: "÷", keyCode: 197, value: "/" },
    { label: "×", keyCode: 56, value: "*" },
    { label: "-", keyCode: 189, value: "-" },
    { label: "+", keyCode: 187, value: "+" },
  ];

  return (
    <div className="keypad grid grid-cols-4 gap-4 p-4 justify-center">
      {/* Number keys */}
      <div className="col-span-3 grid grid-cols-3 gap-4">
        {keys.map((value, index) => (
          <p
            onClick={() => props.handleKeyPress(value.keyCode, value.label)}
            key={index}
            className="flex justify-center select-none active:text-[#2E8CA3] cursor-pointer items-center text-[1rem] font-medium leading-[1.375rem]"
          >
            {value.label}
          </p>
        ))}
      </div>

      {/* Symbol keys */}
      <div className="flex flex-col justify-between items-center gap-4">
        {symbols.map((value, index) => (
          <p
            onClick={() => props.handleKeyPress(value.keyCode, value.value)}
            key={index}
            className="flex justify-center text-amber-600 items-center cursor-pointer active:text-[#2E8CA3] select-none text-[1rem] font-medium leading-[1.375rem]"
          >
            {value.label}
          </p>
        ))}
      </div>
    </div>
  );
};
