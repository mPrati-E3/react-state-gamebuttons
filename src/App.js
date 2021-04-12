import ButtonGroup from "./ButtonGroup";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

const names = ['Chess', 'Poker', 'Black Jack', 'Go'] ;

function App() {
  return (
    <Container>
      <ButtonGroup names={names}/>
    </Container>
  );
}

export default App;
