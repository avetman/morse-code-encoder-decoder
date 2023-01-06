import  { useState } from 'react';
import MorseCodeConverter from './Components/morsecodeconverter';
import {decodeMorse, encodeMorse} from './utils/utilities'


function App() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
  
    const handleEncodeClick = () => {
      setOutput(encodeMorse(input));
    }
  
    const handleDecodeClick = () => {
      setOutput(decodeMorse(input));
    }
    
  return(
      <MorseCodeConverter 
        handleEncodeClick={handleEncodeClick} 
        handleDecodeClick={handleDecodeClick} 
        input={input} setInput={setInput} 
        output={output} 
      />
  )
} 


export default App;
