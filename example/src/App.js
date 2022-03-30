import React from "react";

import { useTypeWriter } from "react-type-writer";

const App = () => {
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
  });

  const customBlinkerExample = useTypeWriter({
    text: "Born To Shine!",
    infiniteLoop: true,
    blinker: "_",
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
    </div>
  );
};
export default App;
