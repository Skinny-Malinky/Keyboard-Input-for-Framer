require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Keyboard":[function(require,module,exports){
var keyMap;

exports.backspace = 8;

exports.tab = 9;

exports.enter = 13;

exports.shift = 16;

exports.ctrl = 17;

exports.alt = 18;

exports.caps = 20;

exports.escape = 27;

exports.pageUp = 33;

exports.pageDown = 34;

exports.left = 37;

exports.up = 38;

exports.right = 39;

exports.down = 40;

exports["delete"] = 46;

exports.zero = 48;

exports.one = 49;

exports.two = 50;

exports.three = 51;

exports.four = 52;

exports.five = 53;

exports.six = 54;

exports.seven = 55;

exports.eight = 56;

exports.nine = 57;

exports.a = 65;

exports.b = 66;

exports.c = 67;

exports.d = 68;

exports.e = 69;

exports.f = 70;

exports.g = 71;

exports.h = 72;

exports.i = 73;

exports.j = 74;

exports.k = 75;

exports.l = 76;

exports.m = 77;

exports.n = 78;

exports.o = 79;

exports.p = 80;

exports.q = 81;

exports.r = 82;

exports.s = 83;

exports.t = 84;

exports.u = 85;

exports.v = 86;

exports.w = 87;

exports.x = 88;

exports.y = 89;

exports.z = 90;

exports.numZero = 96;

exports.numOne = 97;

exports.numTwo = 98;

exports.numThree = 99;

exports.numFour = 100;

exports.numFive = 101;

exports.numSix = 102;

exports.numSeven = 103;

exports.numEight = 104;

exports.numNine = 105;

exports.fOne = 112;

exports.fTwo = 113;

exports.fThree = 114;

exports.fFour = 115;

exports.fFive = 116;

exports.fSix = 117;

exports.fSeven = 118;

exports.fEight = 119;

exports.fNine = 120;

exports.fTen = 121;

exports.semiColon = 186;

exports.equalSign = 187;

exports.comma = 188;

exports.dash = 189;

exports.period = 190;

exports.forwardSlash = 191;

exports.openBracket = 219;

exports.backSlash = 220;

exports.closeBracket = 221;

exports.singleQuote = 222;

keyMap = {};

exports.onKey = function(key, handler, throttleTime) {
  return keyMap[key] = Utils.throttle(throttleTime, handler);
};

exports.offKey = function(key) {
  return delete keyMap[key];
};

window.addEventListener('keydown', function(event) {
  var handler;
  event.preventDefault();
  handler = keyMap[event.keyCode];
  if (handler) {
    return handler();
  }
});


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NmcmFzZXIvRG9jdW1lbnRzL2Rldi9GcmFtZXIvS2V5Ym9hcmQgSW5wdXQgZm9yIEZyYW1lci9rZXlib2FyZC1leGFtcGxlLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NmcmFzZXIvRG9jdW1lbnRzL2Rldi9GcmFtZXIvS2V5Ym9hcmQgSW5wdXQgZm9yIEZyYW1lci9rZXlib2FyZC1leGFtcGxlLmZyYW1lci9tb2R1bGVzL0tleWJvYXJkLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIiMgS2V5c1xuZXhwb3J0cy5iYWNrc3BhY2UgPSA4XG5leHBvcnRzLnRhYiA9IDlcbmV4cG9ydHMuZW50ZXIgPSAxM1xuZXhwb3J0cy5zaGlmdCA9IDE2XG5leHBvcnRzLmN0cmwgPSAxN1xuZXhwb3J0cy5hbHQgPSAxOFxuXG5leHBvcnRzLmNhcHMgPSAyMFxuZXhwb3J0cy5lc2NhcGUgPSAyN1xuZXhwb3J0cy5wYWdlVXAgPSAzM1xuZXhwb3J0cy5wYWdlRG93biA9IDM0XG5cbmV4cG9ydHMubGVmdCA9IDM3XG5leHBvcnRzLnVwID0gMzhcbmV4cG9ydHMucmlnaHQgPSAzOVxuZXhwb3J0cy5kb3duID0gNDBcbmV4cG9ydHMuZGVsZXRlID0gNDZcblxuZXhwb3J0cy56ZXJvID0gNDhcbmV4cG9ydHMub25lID0gNDlcbmV4cG9ydHMudHdvID0gNTBcbmV4cG9ydHMudGhyZWUgPSA1MVxuZXhwb3J0cy5mb3VyID0gNTJcbmV4cG9ydHMuZml2ZSA9IDUzXG5leHBvcnRzLnNpeCA9IDU0XG5leHBvcnRzLnNldmVuID0gNTVcbmV4cG9ydHMuZWlnaHQgPSA1NlxuZXhwb3J0cy5uaW5lID0gNTdcblxuZXhwb3J0cy5hID0gNjVcbmV4cG9ydHMuYiA9IDY2XG5leHBvcnRzLmMgPSA2N1xuZXhwb3J0cy5kID0gNjhcbmV4cG9ydHMuZSA9IDY5XG5leHBvcnRzLmYgPSA3MFxuZXhwb3J0cy5nID0gNzFcbmV4cG9ydHMuaCA9IDcyXG5leHBvcnRzLmkgPSA3M1xuZXhwb3J0cy5qID0gNzRcbmV4cG9ydHMuayA9IDc1XG5leHBvcnRzLmwgPSA3NlxuZXhwb3J0cy5tID0gNzdcbmV4cG9ydHMubiA9IDc4XG5leHBvcnRzLm8gPSA3OVxuZXhwb3J0cy5wID0gODBcbmV4cG9ydHMucSA9IDgxXG5leHBvcnRzLnIgPSA4MlxuZXhwb3J0cy5zID0gODNcbmV4cG9ydHMudCA9IDg0XG5leHBvcnRzLnUgPSA4NVxuZXhwb3J0cy52ID0gODZcbmV4cG9ydHMudyA9IDg3XG5leHBvcnRzLnggPSA4OFxuZXhwb3J0cy55ID0gODlcbmV4cG9ydHMueiA9IDkwXG5cbmV4cG9ydHMubnVtWmVybyA9IDk2XG5leHBvcnRzLm51bU9uZSA9IDk3XG5leHBvcnRzLm51bVR3byA9IDk4XG5leHBvcnRzLm51bVRocmVlID0gOTlcbmV4cG9ydHMubnVtRm91ciA9IDEwMFxuZXhwb3J0cy5udW1GaXZlID0gMTAxXG5leHBvcnRzLm51bVNpeCA9IDEwMlxuZXhwb3J0cy5udW1TZXZlbiA9IDEwM1xuZXhwb3J0cy5udW1FaWdodCA9IDEwNFxuZXhwb3J0cy5udW1OaW5lID0gMTA1XG5cbmV4cG9ydHMuZk9uZSA9IDExMlxuZXhwb3J0cy5mVHdvID0gMTEzXG5leHBvcnRzLmZUaHJlZSA9IDExNFxuZXhwb3J0cy5mRm91ciA9IDExNVxuZXhwb3J0cy5mRml2ZSA9IDExNlxuZXhwb3J0cy5mU2l4ID0gMTE3XG5leHBvcnRzLmZTZXZlbiA9IDExOFxuZXhwb3J0cy5mRWlnaHQgPSAxMTlcbmV4cG9ydHMuZk5pbmUgPSAxMjBcbmV4cG9ydHMuZlRlbiA9IDEyMVxuXG5leHBvcnRzLnNlbWlDb2xvbiA9IDE4NlxuZXhwb3J0cy5lcXVhbFNpZ24gPSAxODdcbmV4cG9ydHMuY29tbWEgPSAxODhcbmV4cG9ydHMuZGFzaCA9IDE4OVxuZXhwb3J0cy5wZXJpb2QgPSAxOTBcbmV4cG9ydHMuZm9yd2FyZFNsYXNoID0gMTkxXG5leHBvcnRzLm9wZW5CcmFja2V0ID0gMjE5XG5leHBvcnRzLmJhY2tTbGFzaCA9IDIyMFxuZXhwb3J0cy5jbG9zZUJyYWNrZXQgPSAyMjFcbmV4cG9ydHMuc2luZ2xlUXVvdGUgPSAyMjJcblxua2V5TWFwID0ge31cblxuZXhwb3J0cy5vbktleSA9IChrZXksIGhhbmRsZXIsIHRocm90dGxlVGltZSkgLT5cbiAgICBrZXlNYXBba2V5XSA9IFV0aWxzLnRocm90dGxlIHRocm90dGxlVGltZSwgaGFuZGxlclxuXG5leHBvcnRzLm9mZktleSA9IChrZXkpIC0+XG4gICAgZGVsZXRlIGtleU1hcFtrZXldXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyICdrZXlkb3duJywgKGV2ZW50KSAtPlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBoYW5kbGVyID0ga2V5TWFwW2V2ZW50LmtleUNvZGVdXG4gICAgaWYgKGhhbmRsZXIpXG4gICAgICAgIGhhbmRsZXIoKSIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBRUFBO0FEQ0EsSUFBQTs7QUFBQSxPQUFPLENBQUMsU0FBUixHQUFvQjs7QUFDcEIsT0FBTyxDQUFDLEdBQVIsR0FBYzs7QUFDZCxPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFDaEIsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBQ2hCLE9BQU8sQ0FBQyxJQUFSLEdBQWU7O0FBQ2YsT0FBTyxDQUFDLEdBQVIsR0FBYzs7QUFFZCxPQUFPLENBQUMsSUFBUixHQUFlOztBQUNmLE9BQU8sQ0FBQyxNQUFSLEdBQWlCOztBQUNqQixPQUFPLENBQUMsTUFBUixHQUFpQjs7QUFDakIsT0FBTyxDQUFDLFFBQVIsR0FBbUI7O0FBRW5CLE9BQU8sQ0FBQyxJQUFSLEdBQWU7O0FBQ2YsT0FBTyxDQUFDLEVBQVIsR0FBYTs7QUFDYixPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFDaEIsT0FBTyxDQUFDLElBQVIsR0FBZTs7QUFDZixPQUFPLEVBQUMsTUFBRCxFQUFQLEdBQWlCOztBQUVqQixPQUFPLENBQUMsSUFBUixHQUFlOztBQUNmLE9BQU8sQ0FBQyxHQUFSLEdBQWM7O0FBQ2QsT0FBTyxDQUFDLEdBQVIsR0FBYzs7QUFDZCxPQUFPLENBQUMs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
