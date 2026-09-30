function StrengthBar() {
  return (
    <>
      <progress className="w-180 h-3 rounded-full [&::-moz-progress-bar]:rounded-full " value={3} max={5}></progress>
    </>
  );
}

export default StrengthBar;
