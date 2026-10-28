import { useState, useEffect } from "react";
import { RefreshCcw } from "lucide-react";
import StrengthBar from "./StrengthBar";
import logo from "./assets/Logotipo_Mercury.png"

function App() {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(0);
  const [passStrength, setPassStrength] = useState(0);
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

  //Password requisitis

  const progress = Math.max(0, Math.min(100, ((passLength - 1) / 49) * 100));

  const handleChange = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setOptions((prev) => ({ ...prev, [name]: true }));

      return;
    }

    const totalActive = Object.values(options).filter(Boolean).length;

    if (totalActive > 1) {
      setOptions((prev) => ({ ...prev, [name]: false }));
    }
  };

  useEffect(() => {
    generatePassword();
  }, [options]);

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

    console.log(characters);

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

  const passwordStrength = () => {
    // const hasUpper = /[A-Z]/.test(password);
    // const hasLower = /[a-z]/.test(password)
    // const hasNum = /[0-9]/.test(password);
    // const hasSym = /[^A-Za-z0-9]/.test(password);

    const hasOptions = {
      hasUpper: /[A-Z]/.test(password),
      hasLower: /[a-z]/.test(password),
      hasNum: /[0-9]/.test(password),
      hasSym: /[^A-Za-z0-9]/.test(password),
    };

    const hasTotal = Object.values(hasOptions).filter(Boolean).length;

    console.log(hasTotal);

    if (hasTotal == 1 && passLength >= 0 && passLength < 7) {
      setPassStrength(1);
      console.log("Caiu nesse if1-0");
    } else if (hasTotal == 1 && passLength >= 7 && passLength < 15) {
      setPassStrength(2);
      console.log("Caiu nesse if1-7");
    } else if (hasTotal == 1 && passLength >= 15) {
      setPassStrength(3);
      console.log("Caiu nesse if1-15");
    }

    if (hasTotal == 2 && passLength >= 0 && passLength < 5) {
      setPassStrength(1);
      console.log("Caiu nesse if2-0");
    } else if (hasTotal == 2 && passLength >= 5 && passLength < 10) {
      setPassStrength(2);
      console.log("Caiu nesse if2-5");
    } else if (hasTotal == 2 && passLength >= 10 && passLength < 14) {
      setPassStrength(3);
      console.log("Caiu nesse if2-10");
    } else if (hasTotal == 2 && passLength >= 14 && passLength < 17) {
      setPassStrength(4);
      console.log("Caiu nesse if2-14");
    } else if (hasTotal == 2 && passLength >= 17) {
      setPassStrength(5);
      console.log("Caiu nesse if2-17");
    }

    if (hasTotal == 3 && passLength >= 1 && passLength < 9) {
      setPassStrength(2);
      console.log("Caiu nesse if3-1");
    } else if (hasTotal == 3 && passLength >= 9 && passLength < 12) {
      setPassStrength(3);
      console.log("Caiu nesse if3-9");
    } else if (hasTotal == 3 && passLength >= 12 && passLength < 14) {
      setPassStrength(4);
      console.log("Caiu nesse if3-12");
    } else if (hasTotal == 3 && passLength >= 14) {
      setPassStrength(5);
      console.log("Caiu nesse if3-14");
    }

    if (hasTotal == 4 && passLength >= 1 && passLength < 8) {
      setPassStrength(2);
      console.log("Caiu nesse if4-1");
    } else if (hasTotal == 4 && passLength >= 8 && passLength < 11) {
      setPassStrength(3);
      console.log("Caiu nesse if4-8");
    } else if (hasTotal == 4 && passLength >= 11 && passLength < 13) {
      setPassStrength(4);
      console.log("Caiu nesse if4-11");
    } else if (hasTotal == 4 && passLength >= 13) {
      setPassStrength(5);
      console.log("Caiu nesse if4-13");
    }
  };

  useEffect(() => {
    passwordStrength();
  }, [password]);

  return (
    <div className="w-screen h-screen bg-background bg-[radial-gradient(ellipse_90%_80%_at_50%_0%,var(--color-top-bright)_0%,transparent_60%)] flex justify-center items-center flex-col gap-10 pt-10 relative ">

      {/* Logo */}

      <div className="absolute top-0 z-1">
        <img src={logo} className="w-55 " alt="" />
      </div>

      {/* TITULO */}
      <h1 className="text-center text-4xl font-sans font-extrabold bg-linear-to-r from-text to-secondary-text bg-clip-text text-transparent z-2">
        Password Generator
      </h1>

      <main className="border border-glassBorder bg-glassBG rounded-2xl w-120 md:w-160 flex flex-col items-center p-2 pb-10 z-2">
        <div className="flex flex-col items-center gap-5 ">
          {/* SESSAO DO TEXTO */}
          <div className="border border-glassBorder bg-[#110F18] h-20 w-115 md:w-150 rounded-2xl flex flex-row items-center gap-5 p-5">
            <input
              type="text"
              name="campoSenha"
              id="campoSenha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPassLength(e.target.value.length);
              }}
              className=" w-[80%] h-[80%] text-2xl text-text focus:outline-none"
            />
            <div className="border border-glassBorder bg-[#201D26] hover:bg-[#35303f] rounded-lg w-12 h-10 flex items-center justify-center">
              <RefreshCcw
                className="hover:cursor-pointer "
                onClick={generatePassword}
                color="white"
              />
            </div>
            <input
              type="button"
              value="Copy password"
              onClick={copyToClipboard}
              className="bg-linear-to-r from-clipboard-first-color to-clipboard-second-color shadow-[0_6px_20px_rgba(139,43,226,0.45)] text-white h-10 w-45 rounded-lg font-[Arial] font-bold hover:bg-purple-800 hover:cursor-pointer hover:-translate-y-px hover:shadow-[0_10px_26px_rgba(139,43,226,0.6)]"
            />
          </div>

          <div className="w-115 md:w-150 flex flex-row items-center">
            <StrengthBar passStrength={passStrength}></StrengthBar>
          </div>
        </div>
        <div className="bg-h-50  w-115 md:w-150  flex flex-col gap-8 rounded-lg mt-5">
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-row gap-2 justify-between items-center">
              <p className="text-md font-sans text-secondary-text">
                Number of characters
              </p>
              <p className="text-xl font-[Arial] text-bright-purple ">
                {passLength}
              </p>
            </div>
            <div className="relative w-full flex items-center h-5">
              {/* Trilho de fundo */}
              <div className="absolute w-full h-2 rounded-full bg-[#201D26]" />

              {/* Progresso */}
              <div
                className="absolute h-2 rounded-full bg-bright-purple"
                style={{
                  width: `${progress}%`,
                }}
              />

              {/* Controle nativo transparente */}
              <input
                type="range"
                min={1}
                max={50}
                value={passLength}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setPassLength(value);
                  generatePassword();
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              {/* Bolinha personalizada */}
              <div
                className="absolute w-4 h-4 rounded-full
                  bg-bright-purple border-2 border-white
                  pointer-events-none"
                style={{
                  left: `${progress}%`,
                  transform: "translateX(-50%)",
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-lg font-sans text-secondary-text">
              Utilized characters
            </p>
            <nav className="flex flex-row gap-10 w-full">
              <ul className="w-full flex flex-row gap-3 justify-between">
                <li
                  className={`flex flex-row  items-center justify-center gap-2  w-40 h-12 rounded-lg border transition duration-200 ease-in-out ${options.includeUpper ? "border-main-purple bg-[#3A1D5A]" : "border-gray-700 hover:border-bright-purple"}`}
                >
                  <input
                    type="checkbox"
                    name="includeUpper"
                    id=""
                    checked={options.includeUpper}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className="appearance-none
                        w-5 h-5
                        rounded-md
                        flex
                        items-center
                        justify-center
                        border-2 border-[#50465E]
                        bg-[#201D26]
                        cursor-pointer
                        transition-all duration-200

                        checked:bg-bright-purple
                        checked:border-bright-purple

                        hover:border-bright-purple

                        checked:after:content-['✓']
                        checked:after:text-white
                        checked:after:flex
                        checked:after:items-center
                        checked:after:justify-center
                        checked:after:text-sm"
                  />
                  <label
                    htmlFor="maiuscula"
                    className="font-mono text-md text-white"
                  >
                    Uppercase
                  </label>
                </li>
                <li
                  className={`flex flex-row  items-center justify-center gap-2  w-40 h-12 rounded-lg border transition duration-200 ease-in-out ${options.includeLower ? "border-main-purple bg-[#3A1D5A]" : "border-gray-700 hover:border-bright-purple"}`}
                >
                  <input
                    type="checkbox"
                    name="includeLower"
                    id=""
                    checked={options.includeLower}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className="appearance-none
                        w-5 h-5
                        rounded-md
                        flex
                        items-center
                        justify-center
                        border-2 border-[#50465E]
                        bg-[#201D26]
                        cursor-pointer
                        transition-all duration-200

                        checked:bg-bright-purple
                        checked:border-bright-purple

                        hover:border-bright-purple

                        checked:after:content-['✓']
                        checked:after:text-white
                        checked:after:flex
                        checked:after:items-center
                        checked:after:justify-center
                        checked:after:text-sm"
                  />
                  <label htmlFor="minuscula" className="font-mono text-md text-white">
                    Lowercase
                  </label>
                </li>
                <li
                  className={`flex flex-row  items-center justify-center gap-2  w-40 h-12 rounded-lg border transition duration-200 ease-in-out ${options.includeNum ? "border-main-purple bg-[#3A1D5A]" : "border-gray-700 hover:border-bright-purple"}`}
                >
                  <input
                    type="checkbox"
                    name="includeNum"
                    id=""
                    checked={options.includeNum}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className="appearance-none
                        w-5 h-5
                        rounded-md
                        flex
                        items-center
                        justify-center
                        border-2 border-[#50465E]
                        bg-[#201D26]
                        cursor-pointer
                        transition-all duration-200

                        checked:bg-bright-purple
                        checked:border-bright-purple

                        hover:border-bright-purple

                        checked:after:content-['✓']
                        checked:after:text-white
                        checked:after:flex
                        checked:after:items-center
                        checked:after:justify-center
                        checked:after:text-sm"
                  />
                  <label htmlFor="numeros" className="font-mono text-md text-white">
                    Numbers
                  </label>
                </li>
                <li
                  className={`flex flex-row  items-center justify-center gap-2  w-40 h-12 rounded-lg border transition duration-200 ease-in-out ${options.includeSym ? "border-main-purple bg-[#3A1D5A]" : "border-gray-700 hover:border-bright-purple"}`}
                >
                  <input
                    type="checkbox"
                    name="includeSym"
                    id=""
                    checked={options.includeSym}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className="appearance-none
                        w-5 h-5
                        rounded-md
                        flex
                        items-center
                        justify-center
                        border-2 border-[#50465E]
                        bg-[#201D26]
                        cursor-pointer
                        transition-all duration-200

                        checked:bg-bright-purple
                        checked:border-bright-purple

                        hover:border-bright-purple

                        checked:after:content-['✓']
                        checked:after:text-white
                        checked:after:flex
                        checked:after:items-center
                        checked:after:justify-center
                        checked:after:text-sm"
                  />
                  <label htmlFor="simbolos" className="font-mono text-md text-white">
                    Symbols
                  </label>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
