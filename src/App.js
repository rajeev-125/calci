import React, {useState} from 'react';
import './App.css';

function App() {

const [value,setValue] = useState('');

const clickHandler = (e) => {
  setValue(value + e.target.value);
};

const clickHandler2 = () => {
  setValue('');
};

const getResult = () => {
  // eslint-disable-next-line
  setValue(eval(value));  
};


  return (
    <div className="App">
      <p className="cal">Calculator</p>
      
      <input id="input" value={value} />
    
      <div>
        <button className="ac" onClick={clickHandler2} value="">
          AC
        </button>
        <button className="prcent"onClick={clickHandler} value="%">
          %
        </button>
        <button  className="prcent"onClick={clickHandler} value="/">
          /
        </button>

        <br />
<div id="first">
        <button  className="btn1"onClick={clickHandler} value="1">
          1
        </button>
        <button className="btn1"onClick={clickHandler} value="2">
          2
        </button>
        <button className="btn1"onClick={clickHandler} value="3">
          3
        </button>
        <button className="prcent"onClick={clickHandler} value="*">
          *
        </button>
        </div>
        
        <div id="second">
        <button className="btn1"onClick={clickHandler} value="4">
          4
        </button>
        <button  className="btn1"onClick={clickHandler} value="5">
          5
        </button>
        <button className="btn1" onClick={clickHandler} value="6">
          6
        </button>
        <button className="prcent" onClick={clickHandler} value="-">
          -
        </button>
        <br />
        </div>

        <button className="btn1" onClick={clickHandler} value="7">
          7
        </button>
        <button className="btn1" onClick={clickHandler} value="8">
          8
        </button>
        <button className="btn1"onClick={clickHandler} value="9">
          9
        </button>
        <button  className="prcent"onClick={clickHandler} value="+">
          +
        </button>
        <br />
        <button className="btn1"onClick={clickHandler} value="0">
          0
        </button>
        <button className="btn1"onClick={clickHandler} value=".">
          .
        </button>
        <button className="equal" onClick={getResult}>=</button>

        <br />
      </div>
    </div>
  );
}

export default App;
