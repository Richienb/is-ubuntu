/**
Whether the process is running inside Ubuntu.

@example
```
const isUbuntu = require("is-ubuntu")

// When the process is running inside Ubuntu
console.log(isUbuntu)
//=> true
```
*/
declare const isUbuntu: boolean

export = isUbuntu
