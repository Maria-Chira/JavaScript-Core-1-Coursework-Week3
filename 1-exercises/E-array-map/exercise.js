// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// first solution
function multiplyBy100 (number){
    return number*100;
}
var numbersMultiplied = numbers.map(multiplyBy100);
// console.log(numbersMultiplied);


//2nd solution- callback function 
var numbersMultiplied = numbers.map (function multiplyBy100(number){
    return number *100;
})
// console.log(numbersMultiplied);


//3rd solution - callback function  -removed the function name
var numbersMultiplied = numbers.map(function (number) {
  return number * 100;
});
// console.log(numbersMultiplied);


//4th solution - arrow function  
var numbersMultiplied = numbers.map(number => {
  return number * 100;
});
// console.log(numbersMultiplied);


//5th solution - arrow function - shorter code
var numbersMultiplied = numbers.map(number =>  number * 100);
// console.log(numbersMultiplied);
