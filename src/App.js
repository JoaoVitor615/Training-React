import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa 
       nome="João" 
       idade="28" 
       profissao="programador" 
       foto="https://via.placeholder.com/150"/>
       <List/>

    </div>
  );
}

export default App;
