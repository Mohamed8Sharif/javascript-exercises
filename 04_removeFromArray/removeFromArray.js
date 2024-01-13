const removeFromArray = function(...args) {
    let newArray = args[0];

    for(let i = 1; i < args.length; i++)
    {
        for(let j = newArray.length-1; j >= 0; j++)
        {
            if(args[i] == newArray[j])
            {
                newArray.splice(j,1);
            }
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
