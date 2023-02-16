import {useState, useEffect} from 'react'
function App() {
  const[count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  });

  return (
     <div className='App'>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
      <button onClick={()=> setCount(count -1 )}>Clique aqui para diminuir</button>
    </div>
  );
}

export default App;
