import  { useCallback, useEffect, useState , useRef } from 'react';

function App() {
  const [length, setLength] = useState(9);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [psswd, setPsswd] = useState('');

  // useRef using
  const passwdRef = useRef(null);

  const copyPssedonClip = useCallback(() => {  // how useCallback  optimize the function
    passwdRef.current?.select();
    // passwdRef.current?.setSelectionRange(0, 99999);
    window.navigator.clipboard.writeText(passwdRef.current.value);
  }, [psswd] )


  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPsswd(pass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-50 bg-gray-700'>
        <h1 className='text-2xl text-center font-bold mb-4 my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={psswd}
            className='outline-none w-full py-2 px-3 text-gray-800 bg-gray-200 rounded-lg'
            placeholder='Password'
            ref={passwdRef}
            readOnly
          />
          <button onClick={copyPssedonClip} className='outline-none bg-blue-800 text-white px-3 py-0.5'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min='5'
              max='20'
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={numAllowed}
              id='numberInput'
              className='cursor-pointer'
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={charAllowed}
              id='charInput'
              className='cursor-pointer'
              onChange={() => setCharAllowed((p) => !p)}
            />
            <label>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
