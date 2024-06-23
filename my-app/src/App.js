import css from './App.module.css';
import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
    </div>
  );
}

export default App;