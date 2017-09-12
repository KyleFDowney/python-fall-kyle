'use strict'

// var favoriteNumber = 42;
// var avisFavorite = 21;
// someNumber = favoriteNumber - avisFavorite;
// var finalNumber = someNumber * 5;
// console.log(someNumber);
// console.log(finalNumber);

// var whatNumber = prompt('Gimme a number');
//
// if(whatNumber < 50){
//   alert('Yo yer number is less than 50. Not cool');
// }else{
//   alert('That\'s a real good lookin\' number ya got there.');
// }

//TASK ONE
console.log("Begin Task 1");

function taskOne(x,y) {
x = prompt('Enter 1st #')
y = prompt('Enter 2nd #')
if(x>y) {
  console.log(x + " is the greater number");
}else{
    console.log(y + " is the greater number");
}
}

taskOne();

//TASK TWO
console.log("Begin Task 2");

var numbers = [128,0,255];
numbers.sort();
alert(numbers);

//TASK THREE
console.log("Begin Task 3");

function taskThree (a,b,c,d,e) {
  a = 5;
  b = 24;
  c = 623;
  d = 73;
  e = 20;

  if (a>b && a>c && a>d && a>e) {
    alert('\"a\" is the greatest number: ' + a)
  } else if(b>a && b>c && b>d && b>e) {
    alert('\"b\" is the greatest number: ' + b)
  } else if(c>a && c>b && c>d && c>e) {
    alert('\"c\" is the greatest number: ' + c)
  } else if(d>a && d>c && d>b && d>e) {
    alert('\"d\" is the greatest number: ' + d)
  } else if(e>a && e>c && e>d && e>b) {
    alert('\"e\" is the greatest number: ' + e)
  }

}

taskThree();

//TASK FOUR
console.log("Begin Task 4");

for (var i = 0; i<15;i++)
{
  if(i%2 == 1){
    console.log("ODD! " + i)
  } else {
    console.log("EVEN! " + i);
  }
}

//TASK FIVE
console.log("Begin Task 5");

for (var i = 0; i<=100;i++)
{
  if(i%3 == 0){
    console.log("Fizz");
  } else if(i%5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//TASK SIX
console.log("Begin Task 6");

function taskSix () {
  var x = 0;
  for (var i = 0; i<=1000;i++){
    if(i%3 == 0){
      x++;
    }
  }
  console.log("There are " + x + " numbers between 1 and 1000 divisable by 3");
}
taskSix();

//TASK SEVEN
console.log("Begin Task 7");

function taskSeven () {
  console.log("    1    ");
  console.log("   121   ");
  console.log("  12321  ");
  console.log(" 1234321 ");
  console.log("123454321");
}
taskSeven();

//TASK EIGHT
console.log("Begin Task 8");

function taskEight () {
  console.log("    1    ");
  console.log("   121   ");
  console.log("  12321  ");
  console.log(" 1234321 ");
  console.log("123454321");
  console.log(" 1234321 ");
  console.log("  12321  ");
  console.log("   121   ");
  console.log("    1    ");
}
taskEight();
