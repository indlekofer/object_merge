# @indlekofer/object_merge

## Usage

```js
import merge from '@indlekofer/object_merge';
```

```js
var obj = merge([
  {test: 1, test2: 2, test3: 3},
  {test4: 4}
]);
console.log(obj); //=> {test: 1, test2: 2, test3: 3, test: 4}
```

## Parameters

  **objects**: array with any amount of objects to merge  
