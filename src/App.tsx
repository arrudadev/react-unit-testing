import { useState } from 'react';

function App() {
  const [list, setList] = useState(['Alexandre', 'Diego', 'Mayk', 'Rodz']);

  return (
    <ul>
      {list.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default App;
