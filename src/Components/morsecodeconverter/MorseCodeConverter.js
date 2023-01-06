import {
    Container,
    TextArea,
    Button,
    Output
} from './MorseCodeConverter.style';

const MorseCodeConverter = ({handleEncodeClick , handleDecodeClick , input, setInput, output}) => {
   
  
    return (
      <Container>
        <TextArea placeholder='Write text or morse code' value={input} onChange={event => setInput(event.target.value)} readonly  />
        <div>
          <Button onClick={handleEncodeClick}>Encode</Button>
          <Button onClick={handleDecodeClick}>Decode</Button>
        </div>
        <Output>{output}</Output>
        
      </Container>
    );
  }
  
  export default MorseCodeConverter;