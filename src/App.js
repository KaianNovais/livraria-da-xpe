import './App.css';
import MaisBuscados from './componentes/MaisBuscados/MaisBuscados';
import NavBar from './componentes/NavBar/Nav';
import Pesquisa from './componentes/Pesquisa/Pesquisa';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <Pesquisa />
      </header>
      <MaisBuscados />
    </div>
  );
}

export default App;
