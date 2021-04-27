let dice = {
    sides: 6,
    roll: function () {
      let randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  let dice2 = {
    sides: 12,
    roll: function () {
      let randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

  
  function printNumberLeft(number) {
    let placeholder = document.getElementById('left-num');
    placeholder.innerHTML = number;
  }
  
  let button1 = document.getElementById('left-btn');
  button1.onclick = function() {
    let result = dice.roll();
    printNumberLeft(result);
  };


  function printNumberRight(number) {
    let placeholder = document.getElementById('right-num');
    placeholder.innerHTML = number;
  }
  
  let button = document.getElementById('right-btn');
  
  button.onclick = function() {
    let result = dice.roll();
    printNumberRight(result);
  };

  function printNumberCenter(number) {
    let placeholder = document.getElementById('center-num');
    placeholder.innerHTML = number;
  }
  
  let button2 = document.getElementById('center-btn');
  
  button2.onclick = function() {
    let result = dice2.roll();
    printNumberCenter(result);
  };
