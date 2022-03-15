import './App.css';
import Homepage from './components/homepage';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Movielist from './components/movielist';
import { MovieProvider } from './components/moviecontext';


function App() {
  const [data, setData] = useState(null);
  return (
    
    <div className="App">
      <header className="App-header">
        <Homepage/>    
      </header>
    </div>
    
   
  );
}

export default App;
