import React from 'react';
import List from './components/List';

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

function App() {
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
