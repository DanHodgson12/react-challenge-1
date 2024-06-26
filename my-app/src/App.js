import css from './App.module.css';
import React from 'react';
import Sidebar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
import NavBarForm from "./components/NavBarForm";
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;