
function frequentChar(str){


    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');

    let charCount = new Map();

    let maxChar = '';

    let maxCount = 0;

    for (let char of cleanStr){

        const newCount = (charCount.get(char)||0)+1;

        charCount.set(char,newCount);

        if (newCount > maxCount){

            maxCount = newCount;

            maxChar = char;
        }

    }
    return {char : maxChar, count:maxCount};


}
console.log(frequentChar('cfc church akurdi'));