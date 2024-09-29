import React from 'react';
import ListaCompras from './components/ListaCompras';
import './main.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>INFNET Shopping</h1>
      </header>
      <main className="app-main">
        <ListaCompras />
      </main>
      <footer className="app-footer">
        <p>AT - Mobile First UI com React</p>
      </footer>
    </div>
  );
}

export default App;