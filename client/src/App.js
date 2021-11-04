import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch("/movies")
      .then(r => r.json())
      .then(console.log)
  }, [])
  return (
    <> <h1>Hello from React!</h1></>
  );
}

export default App;
