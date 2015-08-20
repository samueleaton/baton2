# Fang
Async Synchronous Functions?   
[![GitHub version](https://badge.fury.io/gh/samueleaton%2Fbaton.svg)](http://badge.fury.io/gh/samueleaton%2Fbaton) <img src="https://img.shields.io/badge/license-MIT-blue.svg">

Fang allows you to create a chain of functions, where the function chain will only progress if the control is yielded to the next function.

```javascript
fang(
  function(){
    console.log("1");
    this.next();
  },
  function(){
    console.log("2");
    this.next();
  },
  function(){
    console.log("3");
    this.next();
  }
)();
```




<hr>

<br>

*still in early development*
