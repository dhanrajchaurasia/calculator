import React, { useState } from 'react';
import style from "./App.css";
var error = false;

const App = () => {
    const [given, result] = useState("");
    const clicked = (e) => {
        if (error === true) {
            error = false;
            result(e.target.name);
        }
        else
            result(given.concat(e.target.name));
    }
    const clear = () => {
        result("");
    }
    const backspace = () => {
        result(given.slice(0, given.length - 1));
    }
    const calculate = () => {
        if (error === true) {
            error = false;
            result("");
        }
        else {
            if (given.length > 0) {
                try {
                    result(eval(given).toString());
                }
                catch (err) {
                    result("Error");
                    error = true;
                }
            }
        }
    }
    return (
        <>
            <div className="container">
                {/* <h1>Calculator</h1> */}
                <form>
                    <input type="text" value={given} />
                </form>
                <div className="keypad">
                    <button onClick={clear} id="clear">Clear</button>
                    <button onClick={backspace} id="backspace">C</button>
                    <button className="side" name="/" onClick={clicked}>&divide;</button>
                    <button name="7" onClick={clicked}>7</button>
                    <button name="8" onClick={clicked}>8</button>
                    <button name="9" onClick={clicked}>9</button>
                    <button className="side" name="*" onClick={clicked}>&times;</button>
                    <button name="4" onClick={clicked}>4</button>
                    <button name="5" onClick={clicked}>5</button>
                    <button name="6" onClick={clicked}>6</button>
                    <button className="side" name="-" onClick={clicked}>&ndash;</button>
                    <button name="1" onClick={clicked}>1</button>
                    <button name="2" onClick={clicked}>2</button>
                    <button name="3" onClick={clicked}>3</button>
                    <button className="side" name="+" onClick={clicked}>+</button>
                    <button name="0" onClick={clicked}>0</button>
                    <button name="." onClick={clicked}>.</button>
                    <button onClick={clicked} onClick={calculate} id="result">=</button>
                </div>
            </div>
        </>
    );
}

export default App;
