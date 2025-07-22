import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here2");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText); // Only keep this
  }
  const handleLoClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText); // Only keep this
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }

  return (
    <>
    <div className='container'>
      <h1>{props.heading} - {text}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="Mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to lowercase
      </button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        {/* <p>{text.split('').length} words and {text.length}characters</p> */}
        <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
      <p>{0.008 *text.split('').length }Minutes read</p>
      <h2>preview</h2>
      <p>{text}</p>
        {/* Part	Purpose
text.trim()	Remove unwanted leading/trailing spaces
=== "" ? 0 :	Ensure blank text gives 0 words
.split(/\s+/)	Split text by whitespace to count words accurately
text.length	Count every character including space */}

    </div>
    </>
  );
}
