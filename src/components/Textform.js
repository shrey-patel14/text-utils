import React, {useState} from "react";

export default function Textform(props) {

    const handleUpClick =()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const handleLoClick =()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick =()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = " ";
        setText(newText);
    }

    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange =(event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text Here');

    return (
    <>
      <div className="container mb-3" style={{color : props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value= {text}
          style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'black'}}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     
      <div className="container my-2" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </>
  );
}
 