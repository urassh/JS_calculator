const calculations = (mode) => {
    const input_1 = Number(document.getElementById("input1").value);
    const input_2 = Number(document.getElementById("input2").value);
    let resultNumber = 0;

    if (mode === "addition") {
        console.log(mode);
        resultNumber = addition(input_1, input_2);
    } else if (mode === "subtraction") {
        console.log(mode);
        resultNumber = subtraction(input_1, input_2);
    } else if (mode === "multiplication") {
        console.log(mode);
        resultNumber = multiplication(input_1, input_2);
    } else if (mode === "division") {
        console.log(mode);
        resultNumber = division(input_1, input_2);
    } else {
        console.log(mode);
        console.log("想定された値が代入されていません。");
    }

    document.getElementById("reseltAnswer").innerHTML = resultNumber;
};

const addition = (number1, number2) => {
    return number1 + number2;
};

const subtraction = (number1, number2) => {
    return number1 - number2;
};

const multiplication = (number1, number2) => {
    return number1 * number2;
};

const division = (number1, number2) => {
    return number1 / number2;
};

const reset = () => {
    resultNumber = 0;
    document.getElementById("reseltAnswer").innerHTML = 0;
    document.getElementById("input1").innerHTML = 0;
    document.getElementById("input2").innerHTML = 0;
};