import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here2");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText); // Only keep this
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }

  return (
    <div>
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
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
