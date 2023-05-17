import React, {useState} from 'react';
import Person from "./Person/Person";
import './App.css';

const App = () => {
   const [number, setRandom] = useState([
       {number: 0},
       {number: 0},
       {number: 0},
       {number: 0},
       {number: 0},
   ]);

    const case1 = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    const case2 = Math.floor(Math.random() * (15 - 11 + 1)) + 11;
    const case3 = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
    const case4 = Math.floor(Math.random() * (28 - 23 + 1)) + 23;
    const case5 = Math.floor(Math.random() * (32 - 29 + 1)) + 29;


    const changeNumber = () => {
        setRandom([
            {number: case1},
            {number: case2},
            {number: case3},
            {number: case4},
            {number: case5},
        ])
    }

    return(
        <div className="App">
            <div className="numberDiv">
                <Person number={number[0].number}></Person>
                <Person number={number[1].number}></Person>
                <Person number={number[2].number}></Person>
                <Person number={number[3].number}></Person>
                <Person number={number[4].number}></Person>
            </div>
            <div>
                <button className="numberBtn" onClick={changeNumber}>Change number</button>
            </div>
        </div>
    );
};

export default App;
