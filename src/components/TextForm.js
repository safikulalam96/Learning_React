import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");

  const handleuppercase = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    // props.showAlert("converted to uppercase", "success")
  };

  const handleLowercase = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    // props.showAlert("converted to Lowerccase", "success")
  };

  const handleClear = () => {
    let newtext = "";
    settext(newtext);
    // props.showAlert("Text clear", "success")
  };

  const handleCopy = () => {
    var text=document.getElementById('mybox')
    text.select();
    navigator.clipboard.writeText(text.value);
    // props.showAlert("Text Copied to Clipboard", "success")
  };

  const handleremovespace = () => {
    let newtext = text.trim().split(/ +/).join(" ");
    settext(newtext);
    // props.showAlert("removed extra spaces", "success")
  };


  const handleonchange = (event) => {
    settext(event.target.value);
  };

  return (
    <>
      <h1
        className={`container my-4 text-${
          props.mode === "light" ? "black" : "white"
        }`}
      >
        The Text Analyzer
      </h1>
      <div
        className={`mb-3 my-4 container text-${
          props.mode === "light" ? "black" : "white"
        }`}
      >
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter the Text
        </label>
        <textarea
          className={`form-control text`}
          style={{backgroundColor:
            props.mode === "light" ? "#f5f5dc" : "#36454F",color:
            props.mode === "light" ? "black" : "white"
          }}
          id="mybox"
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
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleLowercase}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleClear}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleremovespace}
        >
          Remove Extra space
        </button>
      </div>

      <div
        className={`container my-4 text-${
          props.mode === "light" ? "black" : "white"
        }`}
      >
        <h3>Your Text Summary</h3>
        <p>Number of words: {text.split(" ").length}</p>
        <p>Number of Character: {text.length}</p>
        <p>Reading Time: {0.008 * text.split(" ").length} Minutes</p>
        <h4>Preview of your Text</h4>
        <p>{text.length>0?text:"Enter the Some Text in the Box to Preview"}</p>
      </div>
    </>
  );
}
