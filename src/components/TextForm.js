import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");

  const handleuppercase = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
  };

  const handleLowercase = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
  };

  const handleClear = () => {
    let newtext = "";
    settext(newtext);
  };

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleremovespace = () => {
    let newtext = text.trim().split(/ +/).join(" ");
    settext(newtext);
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
        Try Text Analyzer: Uppercase | Lowercase | Copy | Remove space
      </h1>
      <div
        className={`mb-3 my-4 container text-${
          props.mode === "light" ? "black" : "white"
        }`}
      >
        <textarea
          className={`form-control text`}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#4758a6",
            color: props.mode === "light" ? "black" : "white",
          }}
          id="mybox"
          rows="8"
          onChange={handleonchange}
          value={text}
        ></textarea>
      </div>
      <div className="container ">
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={handleuppercase}
        >
          Convert to uppercase
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLowercase}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClear}
        >
          Clear Text
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
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
        <p>
          Number of words:{" "}
          {
            text.split(/\s+/).filter((e) => {
              return e.length !== 0;
            }).length
          }
        </p>
        <p>Number of Character: {text.length}</p>
        <p>
          Reading Time:{" "}
          {0.008 *
            text.split(" ").filter((e) => {
              return e.length !== 0;
            }).length}{" "}
          Minutes
        </p>
        <h4>Preview of your Text</h4>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
