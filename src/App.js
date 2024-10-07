import { useState } from 'react';
import './App.css';
import Square from './Square';


function App() {
  const [currentAtempt, setCurrentAtempt] = useState(1)

  return (
    <div className="App">
      <header className="App-header">
        <p id='headerName'>
          WORDLE
        </p>
      </header>
      <div className='board'>
        <div className='row'>
          <Square row="1" column="1" attempt={currentAtempt}/>
          <Square row="1" column="2" attempt={currentAtempt}/>
          <Square row="1" column="3" attempt={currentAtempt}/>
          <Square row="1" column="4" attempt={currentAtempt}/>
          <Square row="1" column="5" attempt={currentAtempt}/>
        </div>
        <div className='row'>
          <Square row="2" column="1" attempt={currentAtempt}/>
          <Square row="2" column="2" attempt={currentAtempt}/>
          <Square row="2" column="3" attempt={currentAtempt}/>
          <Square row="2" column="4" attempt={currentAtempt}/>
          <Square row="2" column="5" attempt={currentAtempt}/>
        </div>
        <div className='row'>
          <Square row="3" column="1" attempt={currentAtempt}/>
          <Square row="3" column="2" attempt={currentAtempt}/>
          <Square row="3" column="3" attempt={currentAtempt}/>
          <Square row="3" column="4" attempt={currentAtempt}/>
          <Square row="3" column="5" attempt={currentAtempt}/>
        </div>
        <div className='row'>
          <Square row="4" column="1" attempt={currentAtempt}/>
          <Square row="4" column="2" attempt={currentAtempt}/>
          <Square row="4" column="3" attempt={currentAtempt}/>
          <Square row="4" column="4" attempt={currentAtempt}/>
          <Square row="4" column="5" attempt={currentAtempt}/>
        </div>
        <div className='row'>
          <Square row="5" column="1" attempt={currentAtempt}/>
          <Square row="5" column="2" attempt={currentAtempt}/>
          <Square row="5" column="3" attempt={currentAtempt}/>
          <Square row="5" column="4" attempt={currentAtempt}/>
          <Square row="5" column="5" attempt={currentAtempt}/>
        </div>
      </div>
    </div>
  );
}

export default App;