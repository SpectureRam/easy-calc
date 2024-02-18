//Below are Mathematical Operations (MathOps)

function addition(a,b){
    return a+b;
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function sub(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function mul(a,b){
    return a*b;
}

function divide(a,b){
    if(b === 0){
        throw new Error('Division by zero');
    }
    return a/b;
}

function div(a,b){
    if(b === 0){
        throw new Error('Division by zero');
    }
    return a/b;
}

function exponentiate(a,b){
    return Math.pow(a,b);
}

function exp(a,b){
    return Math.pow(a,b);
}

function squareroot(a){
    if(a < 0){
        throw new Error('Square root of a negative number is undefined!');
    }
    return Math.sqrt(a);
}

function sqrt(a){
    if(a < 0){
        throw new Error('Square root of a negative number is undefined!');
    }
    return Math.sqrt(a);
}

module.exports = {
    addition,
    add,
    subtract,
    sub,
    multiply,
    mul,
    divide,
    div,
    exponentiate,
    exp,
    squareroot,
    sqrt
};