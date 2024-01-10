const repeatString = function(repeatedString, multiplier) {
    if(multiplier < 0)
    {
        return "ERROR";
    }
    let returnedString = "";

    for (let i = 0; i < multiplier; i++)
    {
        returnedString += repeatedString;
    }
    return returnedString;
};

// Do not edit below this line
module.exports = repeatString;
