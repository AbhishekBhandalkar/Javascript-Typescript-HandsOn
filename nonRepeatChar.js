// find first non repeating character in string
function repeatChar(str){

//create a new map to store character and its count

let charCount = new Map();

for (let char of str.toLowerCase()){

    charCount.set(char,(charCount.get(char)||0)+1);
    

}

for (let char of str.toLowerCase()){

    if(charCount.get(char)===1){
        return char;
    }
}
return null;


}
console.log(repeatChar('akldhfaajooekhfj'));