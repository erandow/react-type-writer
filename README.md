# react-type-writer

>

[![NPM](https://img.shields.io/npm/v/react-type-writer.svg)](https://www.npmjs.com/package/react-type-writer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-type-writer
yarn add react-type-writer
```

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

## License

MIT © [ErfanAsadi](https://github.com/ErfanAsadi)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
