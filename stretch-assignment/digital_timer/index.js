
let secondsTens = document.getElementById('secondTens'); // changes from 0 to 1
let secondOnes = document.getElementById('secondOnes'); // changes from 0 to 9 every second
let msHundreds = document.getElementById('msHundreds'); //count 0 to 99, changes from 0 to 9 every 100 centiseconds
let msTens = document.getElementById('msTens'); // count 0 to 999, changes from 0 to 9 every 

//10 seconds
//1 second = 100 centiseconds, every 100 = 1
//1 second = 1000 milliseconds, 1000/100 = 10
/*
secondsTens.innerText = 0;
secondOnes.innerText = 0;
msHundreds.innerText = 0;
msTens.innerText = 0;*/

Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
  };
  
  function updateClock() {
    let now = new Date();
      let milliTens = now.getMilliseconds();
    let milli = now.getMilliseconds();
      let secTens = now.getSeconds();
      let secOnes = now.getSeconds();
  
    var tags = ["secondTens", "secondOnes", "msHundreds", "msTens"],
      corr = [secTens.pad(1), secOnes.pad(1), milliTens.pad(1), milli.pad(1)];
    for (var i = 0; i < tags.length; i++)
      document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
  }
  
  (function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
  })();
