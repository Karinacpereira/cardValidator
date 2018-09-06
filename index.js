function cardValidator (cardNumber){
    // console.log(cardNumber);
    if(cardNumber === undefined){
        throw new Error ("Necessário inserir os números para verificação");
    } else if (typeof cardNumber !== "number") {
        throw new Error ("Necessário inserir os números para verificação");
    } else if(cardNumber.stringNumber().length < 2){
        throw new Error ("Necessário mais de 1 dígito para verificação");
    } else {
        return isValidCard (cardNumber);
    }
}

function isValidCard(cardNumber){
    // console.log(cardNumber)
    let stringNumber = cardNumber.stringNumber().split("");
    let arrayReverse = [];
    let arrayNumber = [];
    let sum = 0;
  
    // console.log(stringNumber);
    for (var i = stringNumber.length - 1; i >= 0; i--){
        arrayReverse.push(stringNumber[i]);
    // console.log(arrayReverse);
    }

    for (var j = 0; j < arrayReverse.length; j++){
        if (j % 2 === 1){
            let multiplication = arrayReverse[j] * 2;
            if (multiplication >= 10){
                let subtraction = multiplication - 9;
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

const _cardValidator = cardValidator;
export { _cardValidator as cardValidator };