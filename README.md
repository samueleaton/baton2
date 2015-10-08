# Fangs
Function Gangs  
[![GitHub version](https://badge.fury.io/gh/samueleaton%2Fbaton.svg)](http://badge.fury.io/gh/samueleaton%2Fbaton) <img src="https://img.shields.io/badge/license-MIT-blue.svg">

Fangs allows you to create a chain of functions, where the function chain will only progress if the control is yielded to the next function.

The first parameter `next` of each function is what should be called to pass control to the next function.

Here is a fang:
```javascript
fang(
  function(next, num){
    console.log(num); // 1
    next(num + 1);
  },
  function(next, num){
    console.log(num); // 2
    next(num * 3);
  },
  function(init, num){
    console.log(num); // 6
    // init(num); // running init will cause another loop
  }
)(1); // pass 1 to first function
```



<hr>

<br>

*still in early development*
