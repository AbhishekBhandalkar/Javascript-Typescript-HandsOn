function count(str) {
    let vowels = 0, consonants = 0, digits = 0;
    
    // 1. Initialize Set outside the loop for O(1) lookups
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);

    // 2. Use for...of loop and lowercase the string once upfront
    for (let char of str.toLowerCase()) {
        
        if (vowelSet.has(char)) {
            vowels++;
        } 
        else if (char >= '0' && char <= '9') {
            digits++;
        } 
        else if (char >= 'a' && char <= 'z') {
            consonants++;
        }
    }

    // 3. Use ES6 Object shorthand
    return { vowels, consonants, digits };
}

console.log(count("aoiucbahkd892@!")); 
// Output: { vowels: 5, consonants: 5, digits: 3 }