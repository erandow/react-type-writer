# react-type-writer

>

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-type-writer
yarn add react-type-writer
```

## Sample Usage

Different situations and implementation is available in the following sample project.
[Code Sandbox](https://codesandbox.io/s/tender-roman-nhspbe?file=/src/App.js)

## Usage

```tsx
import * as React from "react";

import { useTypeWriter } from "react-type-writer";

const Example = () => {
  const text = useTypeWriter({
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
  return <div>{text}</div>;
};
```

## Props

| Props        | Type                  | Usage                                                                                    | Default |
| ------------ | --------------------- | ---------------------------------------------------------------------------------------- | :-----: |
| text         | string \| string[]    | Gets a string or an array of strings to write them in the typewriter                     |  null   |
| delay        | number in miliseconds | Gets a number in miliseconds and utilize it as the time stays on each completed sentence | 1000ms  |
| blinkerDelay | number in miliseconds | Gets a number in miliseconds and utilize it as the delay time for the blinker to blink   |  500ms  |
| blinker      | string                | Gets a string (usually a character) to show as the blinker                               |   \|    |
| infiniteLoop | boolean               | To know if to loop over the text or not after end                                        |  false  |

## License

MIT © [ErfanAsadi](https://github.com/ErfanAsadi)

## Authors

[Iman Akrami](https://github.com/ImanAkrami), [Erfan Asadi](https://github.com/ErfanAsadi)
