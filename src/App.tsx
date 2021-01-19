import React, { useEffect } from 'react';
import {fetchquestion} from './services/Apiservice'
import './App.css';

function App() {

  useEffect(()=>{
    const datafromapi = async()=> {
      await fetchquestion(10,'easy')
      
    }
    datafromapi()
  },[])

  return (
    <div className="App">
      hey
    </div>
  );
}

export default App;
