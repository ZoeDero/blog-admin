import {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [text, setText] = useState("");

  useEffect(() => {
    fetch('http://blog-api.loc/')
    .then(response => response.text())
    .then(content=>setText(content));
  },[])

  return (
    <div className="App">
      {text}
    </div>
  );
}

export default App;
