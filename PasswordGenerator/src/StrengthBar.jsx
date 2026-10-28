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

 const progressColors = {
  1: "[&::-webkit-progress-value]:bg-extremely-weak [&::-moz-progress-bar]:bg-extremely-weak",
  2: "[&::-webkit-progress-value]:bg-weak [&::-moz-progress-bar]:bg-weak",
  3: "[&::-webkit-progress-value]:bg-medium [&::-moz-progress-bar]:bg-medium",
  4: "[&::-webkit-progress-value]:bg-strong [&::-moz-progress-bar]:bg-strong",
  5: "[&::-webkit-progress-value]:bg-very-strong [&::-moz-progress-bar]:bg-very-strong",
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
          className={`appearance-none w-115 md:w-150 h-2 rounded-full overflow-hidden bg-[#201D26] [&::-webkit-progress-bar]:bg-[#201D26] ${progressColors[passStrength] ?? ""}`}
          value={passStrength}
          max={5}
        ></progress>
      </div>
    </>
  );
}

export default StrengthBar;
