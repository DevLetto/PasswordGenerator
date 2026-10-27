function StrengthBar({passStrength}) {



  return (
    <>
      <progress className="w-130 xl:w-180 h-3 rounded-full [&::-moz-progress-bar]:rounded-full " value={passStrength} max={5}></progress>
      <p>{passStrength}</p>
    </>
  );
}

export default StrengthBar;
