const capitalize = (string) => {
    if (string.length === 0) {
        return string;
    }
    return string[0].toUpperCase() + string.slice(1);
}

const reverseString = (string) => {
    if(string.length <= 1){
        return string;
    }

    return string.split('').reverse().join('');
}

class Calculator{
    add(a,b){
        return a + b;
    };

    subtract(a,b){
        return a - b;
    };

    multiply(a,b){
        return a * b;
    };

    divide(a,b){
        return a / b;
    }
}

export {capitalize, reverseString, Calculator};
