import { useState } from "react";
import { RefreshCcw } from "lucide-react";
import StrengthBar from "./StrengthBar";

function App() {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(0);
  const [options, setOptions] = useState({
    includeLower: true,
    includeUpper: false,
    includeNum: false,
    includeSym: false,
  });
  // const [includeLower, setIncludeLower] = useState(false);
  // const [includeUpper, setIncludeUpper] = useState(false);
  // const [includeNum, setIncludeNum] = useState(false);
  // const [includeSym, setIncludeSym] = useState(false);

  const handleChange = (e) => {

    const{name, checked} = e.target;

    if(checked){
      setOptions((prev) => ({...prev, [name]: true}))
      return;
    }

    const totalActive = Object.values(options).filter(Boolean).length;

    if(totalActive > 1){
      setOptions((prev) => ({...prev, [name]:false}))
    }

  }

  const generatePassword = () => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%&*()-_=+^~§ªº/?;:.,<>\|";

    const characters =
      (options.includeLower ? lowerCaseChars : "") +
      (options.includeUpper ? upperCaseChars : "") +
      (options.includeNum ? numbers : "") +
      (options.includeSym ? symbols : "");

    let generatedPassword = "";
    for (let i = 0; i < passLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="w-screen h-screen bg-white flex justify-baseline items-center flex-col gap-30 pt-10">
      <h1 className="text-center text-4xl font-[Arial] ">Gerador de senha</h1>

      <div className="flex flex-col items-center gap-5">
        <div className="border border-black h-25 w-150 xl:w-200 rounded-lg flex flex-row items-center gap-5 p-5">
          <input
            type="text"
            name="campoSenha"
            id="campoSenha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPassLength(e.target.value.length);

            }}
            className=" w-[80%] h-[80%] text-2xl focus:outline-none"
          />
          <RefreshCcw
            className="hover:cursor-pointer"
            onClick={generatePassword}
          />
          <input
            type="button"
            value="Copiar senha"
            onClick={copyToClipboard}
            className="bg-purple-700 text-white h-10 w-30 rounded-xl font-[Arial] font-bold hover:bg-purple-800 hover:cursor-pointer"
          />
        </div>
        <div className="w-150 xl:w-200 flex flex-row items-baseline">
          <StrengthBar></StrengthBar>
        </div>
      </div>

      <div className="bg-purple-400 h-50  w-150 xl:w-200 p-5 flex flex-col gap-8 rounded-lg">
        <div className="flex flex-col xl:flex-row  xl:gap-10 gap-1">
          <div className="flex flex-row gap-2 xl:gap-1 items-center">
            <p className="text-xl font-[Arial]">
              Numero de caracteres da senha
            </p>
            <p className="text-xl font-[Arial] ">{passLength}</p>
          </div>
          <input
            value={passLength}
            type="range"
            min={1}
            max={50}
            onChange={(e) => {
              setPassLength(e.target.value);
              generatePassword();
            }}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-[Arial]">Caracteres utilizados</p>

          <nav className="flex flex-row gap-10 w-full">
            <ul className="w-full columns-2 xl:columns-1 xl:flex xl:flex-row justify-between">
              <li className="flex flex-row  items-center gap-2">
                <input
                  type="checkbox"
                  name="maiscula"
                  id=""
                  // checked={options.includeUpper}
                  ,
                  onChange={handleChange}
                  className="size-5 roundend-lg "
                />
                <label htmlFor="maiuscula" className="font-[Arial]">
                  Letra maiúscula
                </label>
              </li>
              <li className="flex flex-row items-center gap-2">
                <input
                  type="checkbox"
                  name="minuscula"
                  id=""
                  // checked={options.includeLower}
                  ,
                  
                  onChange={handleChange}
                  className="size-5 roundend-lg "
                />
                <label htmlFor="minuscula" className="font-[Arial]">
                  Letra minúscula
                </label>
              </li>
              <li className="flex flex-row items-center gap-2">
                <input
                  type="checkbox"
                  name="numeros"
                  id=""
                  // checked={options.includeNum}
                  ,
                  onChange={handleChange}
                  className="size-5 roundend-lg "
                />
                <label htmlFor="numeros" className="font-[Arial]">
                  Números
                </label>
              </li>
              <li className="flex flex-row items-center gap-2">
                <input
                  type="checkbox"
                  name="simbolos"
                  id=""
                  // checked={options.includeSym}
                  ,
                  onChange={handleChange}
                  className="size-5 roundend-lg "
                />
                <label htmlFor="simbolos" className="font-[Arial]">
                  Símbolos
                </label>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
