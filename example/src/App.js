import React, { useState } from "react";

import { useTypeWriter } from "react-type-writer";

const App = () => {

  const [text, setText] = useState("Custom Text");
  const [tempText, setTempText] = useState("");

  const singleSentenceExample = useTypeWriter({
    text: "Build For Today, Think For The Future!",
  });

  const infiniteSingleSentenceExample = useTypeWriter({
    text: "Vegaris",
    infiniteLoop: true,
  });

  const multipleSentenceExample = useTypeWriter({
    text: [
      "Born To Shine!",
      "Build For Today, Think For The Future!",
      "Vegaris",
    ],
    delay: 5000
  });

  const infiniteMultipleSentenceExample = useTypeWriter({
    text: [
      "Born To Shine!",
      "Build For Today, Think For The Future!",
      "Vegaris",
    ],
    infiniteLoop: true,
  });

  const customDelayExample = useTypeWriter({
    text: [
      "Born To Shine!",
      "Build For Today, Think For The Future!",
      "Vegaris",
    ],
    infiniteLoop: true,
    blinker: "_",
    delay: 3000,
    blinkerDelay: 100,
    showBlinker: false,
  });

  const customBlinkerExample = useTypeWriter({
    text: "Born To Shine!",
    infiniteLoop: true,
    blinker: "_",
  });

  const customSpeedConstantExample = useTypeWriter({
    text: "Born To Shine!",
    infiniteLoop: true,
    blinker: "_",
    typingSpeedConstant: 50,
  });

  const customSentenceExample = useTypeWriter({
    text: text,
    showBlinker: false
  });

  return (
    <div className="container">
      <div className="item">
        <h3>Single Sentence Example:</h3>
        <div className="text">{singleSentenceExample}</div>
      </div>
      <div className="item">
        <h3>Custom Blinker Example:</h3>
        <div className="text">{customBlinkerExample}</div>
      </div>
      <div className="item">
        <h3>Infinite Single Sentence Example:</h3>
        <div className="text">{infiniteSingleSentenceExample}</div>
      </div>
      <div className="item">
        <h3>Multiple Sentences Example:</h3>
        <div className="text">{multipleSentenceExample}</div>
      </div>
      <div className="item">
        <h3>Infinite Multiple Sentences Example:</h3>
        <div className="text">{infiniteMultipleSentenceExample}</div>
      </div>
      <div className="item">
        <h3>Custom Delay Infinite Multiple Sentences Example:</h3>
        <div className="text">{customDelayExample}</div>
      </div>
      <div className="item">
        <h3>Custom Speed Infinite Multiple Sentences Example:</h3>
        <div className="text">{customSpeedConstantExample}</div>
      </div>
      <div className="item">
        <h3>Single Sentence Example:</h3>
        <h6>Write your custom text to be applied.</h6>
        <input onChange={(e) => setTempText(e.target.value)} />
        <button onClick={() => setText(tempText)}>Apply</button>
        <br />
        <div className="text">{customSentenceExample}</div>
      </div>
    </div>
  );
};
export default App;
