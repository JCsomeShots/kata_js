

function validate(num) {
    return num != '' && !isNaN(num) && num < 99999 && num > 0
}

function operation() {
    const numOne = (document.getElementById('num1').value).toString();
    const numTwo = (document.getElementById('num2').value).toString();

    if (validate(numOne) && validate(numTwo)) {
        const digitosOne = numOne.split('').reverse();
        const digitosTwo = numTwo.split('').reverse();
        const lengthMax = Math.max(digitosOne.length, digitosTwo.length);


        let result = [];

        for(let i = 0; i < lengthMax; i++) {
            let numero = ((parseInt(digitosOne[i]) || 0) + (parseInt(digitosTwo[i]) || 0)) % 10;
            result.push(numero)
        }
        
        const resultDiv = document.getElementById('result')
        resultDiv.innerHTML = `El resultado final de la suma será ${result.reverse().join('')}`
    }
}