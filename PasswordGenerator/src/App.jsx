import { useState, useEffect   } from "react";
import { RefreshCcw } from "lucide-react";
import StrengthBar from "./StrengthBar";

function App() {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(0);
  const [passStrength, setPassStrength] = useState(0);
  const [options, setOptions] = useState({
    includeLower: true,
    includeUpper: false,
    includeNum: false,
    includeSym: false,
  })
  // const [includeLower, setIncludeLower] = useState(false);
  // const [includeUpper, setIncludeUpper] = useState(false);
  // const [includeNum, setIncludeNum] = useState(false);
  // const [includeSym, setIncludeSym] = useState(false);

  //Password requisitis

  const minLenght = 4;
  const idealLenght = 18;

  


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

      console.log(characters)

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
      hasSym: /[^A-Za-z0-9]/.test(password)

    }

    const hasTotal = Object.values(hasOptions).filter(Boolean).length;

    console.log(hasTotal)

    if(hasTotal == 1 && passLength >= 0  && passLength < 7 ){
      setPassStrength(1);
      console.log("Caiu nesse if1-0")
    }else if(hasTotal == 1 && passLength >= 7 && passLength < 15){
      setPassStrength(2);
      console.log("Caiu nesse if1-7")
    }else if (hasTotal == 1 && passLength >= 15){
      setPassStrength(3)
      console.log("Caiu nesse if1-15")
    }

    if(hasTotal == 2 && passLength >= 0  && passLength < 5){
      setPassStrength(1);
      console.log("Caiu nesse if2-0")
    }else if(hasTotal == 2 && passLength >= 5 && passLength < 10){
      setPassStrength(2);
      console.log("Caiu nesse if2-5")
    }else if (hasTotal == 2 && passLength >= 10 && passLength < 14){
      setPassStrength(3)
      console.log("Caiu nesse if2-10")
    }else if (hasTotal == 2 && passLength >= 14 && passLength < 17){
      setPassStrength(4)
      console.log("Caiu nesse if2-14")
    }else if (hasTotal == 2 && passLength >= 17){
      setPassStrength(5)
      console.log("Caiu nesse if2-17")
    }

    if(hasTotal == 3 && passLength >= 1 && passLength < 9 ){
      setPassStrength(2);
      console.log("Caiu nesse if3-1")
    }else if(hasTotal == 3 && passLength >= 9 && passLength < 12){
      setPassStrength(3);
      console.log("Caiu nesse if3-9")
    }else if (hasTotal == 3 && passLength >= 12 && passLength < 14){
      setPassStrength(4)
      console.log("Caiu nesse if3-12")
    }else if (hasTotal == 3 && passLength >= 14){
      setPassStrength(5)
      console.log("Caiu nesse if3-14")
    }

    if(hasTotal == 4 && passLength >= 1 && passLength < 8){
      setPassStrength(2);
      console.log("Caiu nesse if4-1")
    }else if(hasTotal == 4 && passLength >= 8 && passLength < 11){
      setPassStrength(3);
      console.log("Caiu nesse if4-8")
    }else if (hasTotal == 4 && passLength >= 11 && passLength < 13){
      setPassStrength(4)
      console.log("Caiu nesse if4-11")
    }else if (hasTotal == 4 && passLength >= 13){
      setPassStrength(5)
      console.log("Caiu nesse if4-13")  
    }



   

  }

   useEffect(() => {
    
    passwordStrength();
    }, [password]);  

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
          <StrengthBar passStrength={passStrength}></StrengthBar>
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
                  name="includeUpper"
                  id=""
                  checked={options.includeUpper}
                  onChange={(e) => {handleChange(e)}}
                  className="size-5 roundend-lg "
                />
                <label htmlFor="maiuscula" className="font-[Arial]">
                  Letra maiúscula
                </label>
              </li>
              <li className="flex flex-row items-center gap-2">
                <input
                  type="checkbox"
                  name="includeLower"
                  id=""
                  checked={options.includeLower}
                  onChange={(e) => {handleChange(e)}}
                  className="size-5 roundend-lg "
                />
                <label htmlFor="minuscula" className="font-[Arial]">
                  Letra minúscula
                </label>
              </li>
              <li className="flex flex-row items-center gap-2 ">
                <input
                  type="checkbox"
                  name="includeNum"
                  id=""
                  checked={options.includeNum}
                  onChange={(e) => {handleChange(e)}}
                  className="size-5 roundend-lg "
                />
                <label htmlFor="numeros" className="font-[Arial]">
                  Números
                </label>
              </li>
              <li className="flex flex-row items-center gap-2">
                <input
                  type="checkbox"
                  name="includeSym"
                  id=""
                  checked={options.includeSym}
                  onChange={(e) => {handleChange(e)}}
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
