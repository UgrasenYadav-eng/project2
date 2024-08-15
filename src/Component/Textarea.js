import React, { useState } from 'react';

export default function Texta(props) {
    const handleSentenceClick = () => {
        console.log("Sentence Case was clicked: " + text);
        let newText = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function(c) {
          return c.toUpperCase();
        });
        setText(newText);
        props.showAlert("Sentance case has been enabled!", "success")
    };

    const handleUpClick = () => {
        console.log("Upper Case was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Upper case has been enabled!", "success")
    };

    const handleLowerClick = () => {
        console.log("Lower Case was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lower case has been enabled!", "success")
    };

    const handleCapitalizeClick = () => {
        console.log("Capitalize Case was clicked: " + text);
        let newText = text.toLowerCase().replace(/\b\w/g, function(c) {
          return c.toUpperCase();
        });
        setText(newText);
        props.showAlert("Capitaliza case has been enabled!", "success")
    };

    const handleAlternatingClick = () => {
        console.log("Alternating Case was clicked: " + text);
        let newText = text.split('').map((char, index) => 
          index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
        ).join('');
        setText(newText);
        props.showAlert("aLtErNaTiNg case has been enabled!", "success")
    };

    const handleInverseClick = () => {
        console.log("Inverse Case was clicked: " + text);
        let newText = text.split('').map(char => 
          char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
        ).join('');
        setText(newText);
        props.showAlert("Inverse case has been enabled!", "success")
    };
    const handleExtraSpaces = () => {
        console.log("extra spaces button has clicked")
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces remove has been enabled!", "success")
    }

    const handleCopy = () => {
        console.log("Copy was clicked: " + text);
        navigator.clipboard.writeText(text);
        props.showAlert("Copy case has been enabled!", "success")
    };

    const handleClearClick = () => {
        console.log("Clear was clicked");
        setText("");
        props.showAlert("Clear case has been Enabled!", "success")
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState('Enter text');
    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Case Converter</h1>
                <p>Just enter your text and choose the case you want to convert it to.</p>
                <div className="mx-3">
                    <textarea
                        className="form-control"
                        style={{
                            backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black',
                            border: props.mode === 'light' ? '2px solid #8e26d9' : '2px solid white'
                        }}
                        rows="10"
                        cols="160"
                        value={text}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="container mx-2 my-2">
                    <button className="btn btn-primary mx-2 my-2" onClick={handleSentenceClick}>Sentence Case</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Upper Case</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Lower Case</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleCapitalizeClick}>Capitalize Case</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleAlternatingClick}>Alternating Case</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleInverseClick}>Inverse Case</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
                    <button className="btn btn-success mx-2 my-2" onClick={handleCopy}>Copy</button>
                    <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear</button>
                </div>
            </div>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Summary of the text:</h2>
                <p>Character Count = {text.length}. You can read this in {0.0078 * text.length} minutes.</p>
                <p>  Number of words = {text.split(/\s+/).filter((word) => word.length > 0).length}  &    
                  Number of sentences = {text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length}  &
                  Number of lines = {text.split(/\r\n|\r|\n/).filter(line => line.trim().length > 0).length}</p>
            </div>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the text box to get a preview"}</p>
            </div>
        </>
    );
}
