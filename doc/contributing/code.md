# Code conventions to FlatSquares

> ❗ **FlatSquares** engine code convention are inspired by **TypeScript** one.

## Names
1. Use PascalCase for type names.
2. Do not use "I" as a prefix for interface names.
3. Use PascalCase for enum values.
4. Use camelCase for function names.
5. Use camelCase for property names and local variables.
6. Do not use "_" as a prefix for private properties.
7. Use whole words in names when possible.

## Components 
1. 1 file per logical component.

## Types
1. Do not export types/functions unless you need to share it across multiple components.
2. Do not introduce new types/values to the global namespace.
4. Within a file, type definitions should come first.

## null and undefined
1. Use **undefined**. Do not use **null**.

## General Assumptions
1. Consider objects like Nodes, Symbols, etc. as immutable outside the component that created them. Do not change them.
2. Consider variables as immutable by default. Use **const** intead of **let** if you don't changed it after declaration.
3. Consider arrays as immutable by default after creation.
4. Don't use

## Comments
1. Use JSDoc style comments for functions, interfaces, enums, and classes.

## Strings
1. Use single quotes for strings.
2. Use interpolate for string format.

## General Constructs
1. Use .forEach instead of for loops.

## Style
1. Use arrow functions over anonymous function expressions.
2. Only surround arrow function parameters when necessary. <br />For example, `(x) => x + x` is wrong but the following are correct:
   1. `x => x + x`
   2. `(x,y) => x + y`
   3. `<T>(x: T, y: T) => x === y`
3. Always surround loop and conditional bodies with curly braces. Statements on the same line are allowed to omit braces.
4. Open curly braces always go on the same line as whatever necessitates them.
5. Parenthesized constructs should have no surrounding whitespace. <br />A single space follows commas, colons, and semicolons in those constructs. For example:
   1. `for (var i = 0, n = str.length; i < 10; i++) { }`
   2. `if (x < 10) { }`
   3. `function f(x: number, y: string): void { }`
6. Use a single declaration per variable statement <br />(i.e. use `var x = 1; var y = 2;` over `var x = 1, y = 2;`).
7. `else` goes on a separate line from the closing curly brace.
8. Use 4 spaces per indentation.