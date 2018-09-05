function cardValidator (cardNumber){
  // console.log(cardNumber);
  if(cardNumber === undefined){
    throw new Error ("Necessário inserir os números para verificação");
  } else if (typeof cardNumber !== "number") {
    throw new Error ("Necessário inserir os números para verificação");
  } else if(cardNumber.toString().length < 2){
    throw new Error ("Necessário mais de 1 dígito para verificação");
  } else {
    return isValidCard (cardNumber);
  }
}

function isValidCard(cardNumber){
  // console.log(cardNumber)
  var stringNumber = cardNumber.toString().split("");
  var arrayReverse = [];
  var arrayNumber = [];
  var sum = 0;
  
  // console.log(stringNumber);
  for (var i = stringNumber.length - 1; i >= 0; i--){
    arrayReverse.push(stringNumber[i]);
    // console.log(arrayReverse);
  }

  for (var j = 0; j < arrayReverse.length; j++){
    if (j % 2 === 1){
      var multiplication = arrayReverse[j] * 2;
      if (multiplication >= 10){
        var subtraction = multiplication - 9;
        arrayNumber.push(subtraction);
      } else {
        arrayNumber.push(multiplication);
      }
    } else {
      arrayNumber.push(parseInt(arrayReverse[j]));
      // console.log(arrayNumber);
    }
  }

  for (var k = 0; k < arrayNumber.length; k++){
    sum += arrayNumber[k];
    // console.log(sum);
  }

  // return sum % 10 === 0 && sum !== 0

  if (sum % 10 === 0 && sum !== 0){
    return true;
  } else {
    return false;
  }
}

module.exports.cardValidator = cardValidator;
module.exports.isValidCard = isValidCard;