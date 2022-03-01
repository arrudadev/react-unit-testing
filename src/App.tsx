import { useState } from 'react';

function App() {
  const [list, setList] = useState(['Alexandre', 'Diego', 'Mayk', 'Rodz']);
  const [newItem, setNewItem] = useState('');

  function addItemInTheList() {
    setList([...list, newItem]);
  }

  return (
    <>
      <input
        placeholder="Novo Item"
        type="text"
        value={newItem}
        onChange={event => setNewItem(event.target.value)}
      />

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
