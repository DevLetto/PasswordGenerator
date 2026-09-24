import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {RefreshCcw} from 'lucide-react'


function App() {
  

  return (
    <div className='w-screen h-screen bg-white flex justify-baseline items-center flex-col gap-50 pt-10'>

      <h1 className='text-center text-4xl font-[Arial] '>
        Gerador de senha
      </h1>

      <div className='border border-black h-25 w-200 rounded-lg flex flex-row items-center gap-5 p-5'  >
        <input type="text" name='campoSenha' id='campoSenha' className=' w-[80%] h-[80%] text-2xl focus:outline-none' />
        <RefreshCcw className='hover:cursor-pointer'/>
        <input type="button" value="Copiar senha" className='bg-purple-700 text-white h-10 w-30 rounded-xl font-[Arial] font-bold hover:bg-purple-800 hover:cursor-pointer' />
      </div>

    </div>
  )
}

export default App
