import React, { useState } from "react";

export default function TextForm() {
  const [text, settext] = useState("See the text magic");

  
  const handleuppercase = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
  };

  const handleLowercase = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
  };

  const handleClear=()=>{
    let newtext=""
    settext(newtext)
  }

  const handleCopy=()=>{
    let newtext=navigator.clipboard.writeText(text);
    settext(newtext)
    
  }

  const handleremovespace= ()=>{
    let newtext= text.trim().split(/ +/).join(' ');
    settext(newtext)
  }


  const handleonchange = (event) => {
    settext(event.target.value);
  };

  return (
    <>
      <h1 className="container my-4">The Text Analyzer</h1>
      <div className="mb-3 my-4 container">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter the Text
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handleonchange}
          value={text}
        ></textarea>
      </div>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleuppercase}
        >
          Convert to uppercase
        </button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLowercase}>
          Convert to Lowercase
        </button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleremovespace}>
          Remove Extra space
        </button>
      </div>

      <div className="container my-4">
        <h3>Your Text Summary</h3>
        <p>Number of words: {text.split(" ").length}</p>
        <p>Number of Character: {text.length}</p>
        <p>Reading Time: {0.008*text.split(" ").length} Minutes</p>
        <h4>Preview of your Text</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
