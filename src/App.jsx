import React from 'react';
import Form from './components/Form';
import List from './components/List';
import './styles.css'

function App() {
  return (
    <div className="App">
      <h1>Catálogo de Produtos</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
