import { useState } from 'react';
import './Square.css'

function Square({row, column, attempt}) {
    const [letter, setLetter] = useState(' ')

    return (
        <input className="cuadrado" disabled={row != attempt ? "true" : ""} type="text" value={letter} onChange={(e)=> setLetter(e.target.value)}></input>
    );
}

export default Square;