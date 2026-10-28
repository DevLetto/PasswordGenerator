import { useState, useEffect } from "react";

function StrengthBar({ passStrength }) {
  const [level, setLevel] = useState("");

  const changeText = () => {
    const levelText = {
      1: "Extremely weak",
      2: "Weak",
      3: "Medium",
      4: "Strong",
      5: "Very strong",
    };

    setLevel(levelText[passStrength]);
  };

  useEffect(() => {
    changeText();
  }, [passStrength]);

  const getColor = () => {
    if (passStrength == 1) return "text-extremely-weak";
    if (passStrength == 2) return "text-weak";
    if (passStrength == 3) return "text-medium";
    if (passStrength == 4) return "text-strong";
    if (passStrength == 5) return "text-very-strong";
  };

  const getColorBar = () => {
    if (passStrength == 1) return "bg-extremely-weak";
    if (passStrength == 2) return "bg-weak";
    if (passStrength == 3) return "bg-medium";
    if (passStrength == 4) return "bg-strong";
    if (passStrength == 5) return "bg-very-strong";
  };
  return (
    <>
      <div >
        <div className="flex flex-row justify-between ">
          <p className="font-sans text-secondary-text">Passowrd Strength</p>
          <p className={`${getColor()} `}>{level}</p>
        </div>
        <progress
          // className="w-115 md:w-150 h-3 rounded-full [&::-moz-progress-bar]:rounded-full "
          className={`appearance-none w-115 md:w-150 h-2 rounded-full overflow-hidden bg-[#201D26] [&::-webkit-progress-bar]:bg-[#201D26] [&::-webkit-progress-value]:${getColorBar()} [&::-moz-progress-bar]:${getColorBar()}`}
          value={passStrength}
          max={5}
        ></progress>
      </div>
    </>
  );
}

export default StrengthBar;
