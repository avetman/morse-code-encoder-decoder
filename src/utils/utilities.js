import MORSE_CODE from './morse_code.json';
 
const lowerCaseMorseCode = (MORSE_CODE) => {

    const lowerCase = {}
    Object.keys(MORSE_CODE).forEach(key => {
        lowerCase[key.toLowerCase()] = MORSE_CODE[key]
    });
    
    return lowerCase;
}


export const decodeMorse = function(morseCode) {
    const words = morseCode.split('   '); // space between words in morse code
    const decoded = words.map(word => {
        const letters = word.split(' ');
        const decodedLetters = letters.map(letter => Object.keys(MORSE_CODE).find(key => MORSE_CODE[key] === letter));
        return decodedLetters.join('');
    });
    return decoded.join(' ');
}

  
  
  export  const encodeMorse = function(message) {
    const lowerCase = lowerCaseMorseCode(MORSE_CODE)
    const words = message.split(' ');
    const encoded = words.map(word => {
      const characters = word.split('');
      const encodedCharacters = characters.map(char => lowerCase[char]);
      return encodedCharacters.join(' ');
    });
    return encoded.join('   ');
  }

