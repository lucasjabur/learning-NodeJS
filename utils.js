// Using commonjs:

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

module.exports = { // this exports the function above to be used in other files
    generateRandomNumber,
    celsiusToFahrenheit,
};
