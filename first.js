function add (a, b) {  // add function
    return a + b;
}

function subtract (a, b) { // subtract function
    return a - b;
}


function multiply (a, b) {  // multiply function
    return a * b;
}


function divide (a, b) {    // divide function
    return a / b;
}



//objects
const company = {
    name: 'Capgemini',
    address: {
        city: 'Mumbai',
        pincode: 400093
    }
}

module.exports = { subtract , multiply , divide , add , company}; // exporting the functions and company object