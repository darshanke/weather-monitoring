import React, { useState } from "react";

// Define a custom dictionary of words and their corrections
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function SpellCheckApp()  {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     inputText: "",
  //     suggestedText: "",
  //   };
  // }
  const [inputText, setInputText] = useState('');
  const [suggestedText, setSeggestedText] = useState('');

     const handleInputChange = (e) => {
    const text = e.target.value;
    // this.setState({ inputText: text });
    setInputText(text)

    // Implement a basic spelling check and correction
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    // Set the suggested text (first corrected word)
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    // this.setState({ suggestedText: firstCorrection || "" });
    setSeggestedText(  firstCorrection || "" );
  };

 
    return (
      <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={inputText}
          onChange={(e)=>handleInputChange(e)}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggestedText && (
          <p>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )}
      </div>
    );
  }


export default SpellCheckApp;
