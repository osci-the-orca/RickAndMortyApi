import "bootstrap/dist/css/bootstrap.min.css";
import Characters from "./components/characters";
import CreateCharacterModal from "./components/createCharacterModal";

function App() {
  return (
    <div className="App">
      <CreateCharacterModal />
      <Characters />
    </div>
  );
}

export default App;
