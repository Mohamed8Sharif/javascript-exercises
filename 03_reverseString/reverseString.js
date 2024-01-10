const reverseString = function(reversedString) {
    let tempString = "";
    
    // Loops through the string backwards and concats its to the temp one
    for(let i = reversedString.length-1; i >= 0; i--)
    {
        // NOTE TO REMEMBER .concat returns the value! It doesnt modify the string your acting upon!
        tempString = tempString.concat(reversedString.charAt(i));
    }

    return tempString;
};

// Do not edit below this line
module.exports = reverseString;
