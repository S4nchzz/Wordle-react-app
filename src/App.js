import { useState } from 'react';
import './App.css';
import Square from './Square';

const solution = 'CLASE';

const replaceAt = function(cadena, index, char) {
  var a = cadena.split("");
  a[index] = char;
  return a.join("");
}

function App() {
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [messageWinner, setMessageWinner] = useState("");

  const guesses = ["     ", "     ","     " , "     ", "     "];
  

  const handleSquareChange = (parameters) => {
    guesses[parameters.row - 1] = replaceAt(guesses[parameters.row - 1], parameters.column - 1, parameters.letter);
    let isAttempComplete = true;
    for (let i = 0; i < 5; i++) {
      if (guesses[parameters.row - 1].charAt(i) == " ") {
        isAttempComplete = false;
        break;
      }
    }
    if (isAttempComplete) {
      if (guesses[parameters.row - 1] == solution) {
        setMessageWinner("CONGRATULATIONS");
        setCurrentAttempt(10);
      }
      else {
        if (currentAttempt < 5) {
          setCurrentAttempt(currentAttempt + 1);
        }
        else {
          setMessageWinner("Game Over");
          setCurrentAttempt(10);
        }
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p id='headerName'>
          WORDLE
        </p>
      </header>
      <div className='board'>
        <div className='row'>
          <Square row="1" column="1" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="1" column="2" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="1" column="3" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="1" column="4" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="1" column="5" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
        </div>
        <div className='row'>
          <Square row="2" column="1" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="2" column="2" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="2" column="3" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="2" column="4" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="2" column="5" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
        </div>
        <div className='row'>
          <Square row="3" column="1" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="3" column="2" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="3" column="3" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="3" column="4" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="3" column="5" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
        </div>
        <div className='row'>
          <Square row="4" column="1" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="4" column="2" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="4" column="3" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="4" column="4" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="4" column="5" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
        </div>
        <div className='row'>
          <Square row="5" column="1" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="5" column="2" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="5" column="3" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="5" column="4" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
          <Square row="5" column="5" attempt={currentAttempt} solution={solution} textUpdate={(e) => handleSquareChange(e)}/>
        </div>
      </div>
    </div>
  );
}

export default App;