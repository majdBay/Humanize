import React, { useEffect, useState } from 'react';
import { List, ListItem } from './components/List';
import { deleteRandomEmployee } from './services/Delete';
import { getEmployees } from './services/Fetch';

function App() {
  const [items, setItems] = useState<ListItem<string>[]>([]);

  useEffect(() => {
    getEmployees().then((result) => {
      setItems(result);
    });
  }, []);
  const fireEmployee = () => {
    setItems(deleteRandomEmployee(items));
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Our employees:</p>
        <List items={items} />
        <button onClick={fireEmployee}>Fire Random Employee</button>
      </header>
    </div>
  );
}

export default App;
