import React, { useEffect, useState } from 'react';
import { List, ListItem } from './components/List';
import { getItems } from './services/Fetch';

function App() {
  const [items, setItems] = useState<ListItem<string>[]>([]);

  useEffect(() => {
    getItems().then((result) => {
      setItems(result);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>List Component:</p>
        <List items={items} />
      </header>
    </div>
  );
}

export default App;
