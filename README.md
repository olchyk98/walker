# Walker
_My way of creating scalable programs_

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)

## <a name="installation"></a>Installation
Install the package with Yarn:

```yarn add @olchyk98/walker```

Or with NPM:

```npm i @olchyk98/walker```

## <a name="usage"></a> Usage
The idea is to go through all modules in the project,
and import them. By passing a `matches` array as an argument, you specifically can
decide what files should be imported.

```
import walkFiles from '@olchyk98/walker'

async function loadHandlers () {
  const handlers = await walkFiles('.',  [ '-handler.js' ])
  console.log(handlers[0]) // .../my-project/src/handlers/my-handler.js
}
```

The function may also return an array of imported modules if argument `doRequire` is set to `true`:
```
const handlers = await walkFiles('.', [ '-handler.js' ], true)
console.log(handlers[0]) // {}
```

