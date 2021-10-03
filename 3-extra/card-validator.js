function cardValidator(cardNumber){
    if(/[a-z]/.test(cardNumber)){
        return "Not valid"
    }else{
        const arrayNumbers = cardNumber.split(""); //string to array

        // the array contains minimum 2 different values
        const firstElement = arrayNumbers[0];  
        const differentNumbers = arrayNumbers.filter(
          (element) => element !== firstElement
        );
        const isDifferent = differentNumbers.length >= 1;

        // string contains only numbers
        const isNumber = /[0-9]/.test(cardNumber);

        //last digit is even 
        const isEven = arrayNumbers[arrayNumbers.length - 1] % 2 == 0;

        // card number has 16 digits
        const isCorrectLength = arrayNumbers.length == 16;

        //sum of digits 
        const sumOfDigits = eval(arrayNumbers.join("+"));
    
        // checking if all the variables above are true => card number is valid
        if (
          isCorrectLength &&
          isNumber &&
          isDifferent &&
          isEven &&
          sumOfDigits > 16
        ) {
          return true;
        }
        return false;
    }   
}

console.log(cardValidator("4444444444444444")); //false - all digits are the same
console.log(cardValidator("a92332119c011112")); //false - it contains letters
console.log(cardValidator("1111111111111110")); //false - sum is less than 16
console.log(cardValidator("6666666666666661")); //false - odd final number 
console.log(cardValidator("6666666666661666")); //valid
