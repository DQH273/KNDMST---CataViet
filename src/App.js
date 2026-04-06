import { Container } from "react-bootstrap";
import Catalogue from "./components/Catalogue";
import "./App.css";
function App() {
  return (
    <div className="app-bg">
      <Container>
        <Catalogue />
      </Container>
    </div>
  );
}

export default App;
