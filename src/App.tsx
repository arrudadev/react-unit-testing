import { useState } from 'react';

function App() {
  const [list, setList] = useState(['Alexandre', 'Diego', 'Mayk', 'Rodz']);
  const [newItem, setNewItem] = useState('');

  function addItemToList() {
    setTimeout(() => {
      setList([...list, newItem]);
    }, 500);
  }

  function removeItemFromList(itemToRemove: string) {
    setTimeout(() => {
      setList(list.filter(item => item !== itemToRemove));
    }, 500);
  }

  return (
    <>
      <input
        placeholder="Novo Item"
        type="text"
        value={newItem}
        onChange={event => setNewItem(event.target.value)}
      />

      <button type="button" onClick={addItemToList}>
        Adicionar
      </button>

      <ul>
        {list.map(item => (
          <>
            <li key={item}>{item}</li>

            <button type="button" onClick={() => removeItemFromList(item)}>
              Remover
            </button>
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
