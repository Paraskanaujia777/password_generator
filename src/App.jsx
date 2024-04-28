import { useState, useCallback, useEffect , useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  // const [password , setPassword] = useState('')

 
  
  let pass = ""
  const passwordGenerator = useCallback(() => {
    

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str = str + "0123456789"
    }
    if (charAllowed) {
      str = str + "!@#$%&*"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    return pass
    // password({pass})


    // console.log(pass)
  }, [length, numberAllowed, charAllowed])


  useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed])

  // let passwordRef = useRef(null)

  // let copyToClipbord = useCallback(()=>{
  //   window.navigator.clipboard.writeText(pass)
  // },[length ,charAllowed ,numberAllowed])





  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 py-4 text-white-600 bg-gray-300'>
        <h1 className=' text-center py-1 my-3  '>Password Generator</h1>

        <input type="text" value={passwordGenerator()} placeholder='passwor' className='outline-none w-full py-1 px-3' readOnly  />

        <div className='flex text-sm gap-x-2 my-4'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={20}
              onChange={(e) => { setLength(e.target.value) }}
              className='cursor-pointer' />
            <label >length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              name=""
              id="numberinput"
              onChange={() => { setNumberAllowed((prev) => !prev) }}
              defaultChecked={numberAllowed} />
            <label>NumberAllowed</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              id='characterInput'
              onChange={() => { setCharAllowed((prev) => !prev) }}
              name=""
              defaultChecked={charAllowed} />
            <label>CharAllowed</label>
          </div>
        </div>



      </div>

    </>
  )
}

export default App
