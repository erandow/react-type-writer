import * as React from "react";

export interface ITypeWriter {
  text: string[] | string;
  delay?: number;
  blinkerDelay?: number;
  infiniteLoop?: boolean;
  blinker?: string;
}

type UseTypeWriterOutput = string;

export const useTypeWriter = (args: ITypeWriter): UseTypeWriterOutput => {
  const {
    text,
    delay = 1000,
    blinkerDelay = 500,
    blinker = "|",
    infiniteLoop,
  } = args;

  const dynamicTexts = Array.isArray(text) ? text : [text];

  /** States */
  const [textIndex, setTextIndex] = React.useState(0);
  const [charIndexInText, setCharIndexInText] = React.useState(0);
  const [showBlinker, setShowBlinker] = React.useState(true);
  const [reverse, setReverse] = React.useState(false);

  /** Effects  */
  React.useEffect(() => {
    if (charIndexInText === dynamicTexts[textIndex].length + 1 && !reverse) {
      if (!infiniteLoop && textIndex === dynamicTexts.length - 1) {
        return;
      }
      setReverse(true);
      return;
    }

    if (charIndexInText === 0 && reverse) {
      if (!infiniteLoop && textIndex === dynamicTexts.length - 1) {
        return;
      }
      setReverse(false);
      setTextIndex((prev) => (prev === dynamicTexts.length - 1 ? 0 : prev + 1));
      return;
    }

    let typeSpeed = 0;
    if (reverse) {
      typeSpeed = 75;
    } else if (charIndexInText === dynamicTexts[textIndex].length) {
      typeSpeed = delay;
    } else {
      typeSpeed = 150;
    }
    typeSpeed = Math.max(
      typeSpeed,
      // eslint-disable-next-line radix
      parseInt(`${Math.random() * 350}`)
    );

    const timeout = setTimeout(() => {
      setCharIndexInText((prev) => prev + (reverse ? -1 : 1));
    }, typeSpeed);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndexInText, textIndex, reverse]);

  // blinker
  React.useEffect(() => {
    const timeout2 = setTimeout(() => {
      setShowBlinker((prev) => !prev);
    }, blinkerDelay);
    return () => clearTimeout(timeout2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showBlinker]);

  const finalTextResult = `${dynamicTexts[textIndex].substring(
    0,
    charIndexInText
  )}${showBlinker ? blinker : " "}`;

  return finalTextResult;
};
