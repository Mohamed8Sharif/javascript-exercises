const sumAll = function(firstNum, secondNum) {
    if(typeof(firstNum) != 'number' || typeof(secondNum) != 'number' || firstNum < 0 || secondNum < 0)
    {
        return "ERROR"
    }

    let tempValue = 0;

    if(firstNum < secondNum)
    {
        for(let i = firstNum; i <= secondNum; i++)
        {
            tempValue += i;
        }
    }
    else
    {
        for(let i = secondNum; i <= firstNum; i++)
        {
            tempValue += i;
        }
    }

    return tempValue;

};

// Do not edit below this line
module.exports = sumAll;
