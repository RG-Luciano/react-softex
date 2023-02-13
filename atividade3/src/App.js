import './App.css';
import HelloWorld from './components/HelloWorld'
function App() {

  const name = "luciano"

  function sum(a, b){
    return a + b
  }
  return (
    <div className="App">
     <h2>Alterando o JSX</h2>
     <p>Olá, {name}</p>
     <p>soma: {sum(1,2)}</p>
     <HelloWorld />
    </div>
  );
}

export default App;
