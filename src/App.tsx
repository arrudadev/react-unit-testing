import { useState } from 'react';

function App() {
  const [list, setList] = useState(['Alexandre', 'Diego', 'Mayk', 'Rodz']);

  function addItemInTheList() {
    setList([...list, 'Novo']);
  }

  return (
    <>
      <button type="button" onClick={addItemInTheList}>
        Adicionar
      </button>

      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
