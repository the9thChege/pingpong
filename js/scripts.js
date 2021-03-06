//Business Logic
var dividend = function(number) {
  if (number % 15 === 0) {        //Modulus 15. As the "if", it takes precedent over the "else" functions
    var word = "pingpong";
    return word;
  } else if (number % 5 === 0) {  //Modulus 5.
    var word2 = "pong";
    return word2;
  } else if (number % 3 === 0) {  //Modulus 3.
    var word3 = "ping";
    return word3;
  } else {
    var word4 = number;
    return word4;
  }
};

//UI Logic
$(document).ready(function() {

  $("form#input").submit(function(event) {
    var endResult = parseInt($("#entry").val()); // Makes a variable from the input with id(#) "entry"
    var numberList = []; // Makes a blank array

    var divx = document.getElementById('output');

    var ul = document.createElement('ul');

    for (var val = 1; val <= endResult; val++) {
      numberList.push(dividend(val)); // Populates the empty array "numberList"
    }

    for (var index = 0; index < numberList.length; index++) {
      var li = document.createElement('li');
      thelist = document.createTextNode(numberList[index]);
      li.appendChild(thelist);
      ul.appendChild(li);
    }
    divx.appendChild(ul);

    document.getElementById("top").style.backgroundImage = "url('img/waves_banner.jpg')";

    event.preventDefault();
  });
});
