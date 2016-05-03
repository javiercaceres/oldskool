# OldsSkool - Typed variables for JS

OldSkool(o$) is a simple JS library to declare typed variables for primitives (String, Number and Boolean) in client side projects.
It works calling the function `o$()` and passing a string as argument, the string must contain a name for the new variable, an operator which indicates the variable type (`'='` for numbers, `'?'` for booleans and `'#'` for strings) and a value after the operator. 

###Example
```javascript
o$('numberVariable=1');
// The above expression is equivalent to: var varname = 1 but you can only assign numbers to it.
o$('booelanVariable?true');
// Same but works for booleans.
o$('stringVariable#mystring');
// Same but works for strings.
```
A variable declared with this function can be call normally through its name. Also it can be redeclared with a new type using `o$()`.
### TODO
- Add a method to remove this variables.

