import React, { useState } from 'react';
import style from "./App.css";
var error = false;
var opr = false;
var num = false;

const App = () => {
    const [given, result] = useState("");
    const work = (e) => {
        if (e.target.name === '-') {
            clicked(e);
        }
        if (num === true) {
            clicked(e);
            opr = true;
        }
    }
    const work2 = (e) => {
        num = true;
        opr = false;
        clicked(e);
    }
    const clicked = (e) => {
        if (error === true) {
            error = false;
            result(e.target.name);
        }
        else {
            if (opr === true) {
                backspace();
            }
            result(given.concat(e.target.name));
            opr = true;
        }
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
            <aside>
            </aside>
            <div className="container">
                {/* <h1>Calculator</h1> */}
                <form>
                    <input type="text" value={given} />
                </form>
                <div className="keypad">
                    <button onClick={clear} id="clear">Clear</button>
                    <button onClick={backspace} id="backspace">C</button>
                    <button className="side" name="/" onClick={work}>&divide;</button>
                    <button name="7" onClick={work2}>7</button>
                    <button name="8" onClick={work2}>8</button>
                    <button name="9" onClick={work2}>9</button>
                    <button className="side" name="*" onClick={work}>&times;</button>
                    <button name="4" onClick={work2}>4</button>
                    <button name="5" onClick={work2}>5</button>
                    <button name="6" onClick={work2}>6</button>
                    <button className="side" name="-" onClick={work}>&ndash;</button>
                    <button name="1" onClick={work2}>1</button>
                    <button name="2" onClick={work2}>2</button>
                    <button name="3" onClick={work2}>3</button>
                    <button className="side" name="+" onClick={work}>+</button>
                    <button name="0" onClick={work2}>0</button>
                    <button name="." onClick={work2}>.</button>
                    <button onClick={clicked} onClick={calculate} id="result">=</button>
                </div>
            </div>
        </>
    );
}       

export default App;
