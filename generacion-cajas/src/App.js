import './App.css';
import React, { useState} from 'react';
import { Boxes } from './components/Boxes';
import FormBox from './components/FormBox';


function App() {

  const [boxes, setBoxes] = useState([]);
  
  return (
    <div className="App">
      <FormBox boxes={boxes} setBoxes={setBoxes}/>
      <Boxes boxes={boxes}/>
      
      
    </div>
  );
}

export default App;
