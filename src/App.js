import ButtonGroup from "./ButtonGroup";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

const names = ['Chess', 'Poker', 'Black Jack', 'Go'] ;

function App() {
  return (
    <Container>
      <h1>Choose your game</h1>
      <ButtonGroup names={names}/>
    </Container>
  );
}

export default App;
