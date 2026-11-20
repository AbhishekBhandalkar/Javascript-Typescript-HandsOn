//palindrome : string that reads same backward as forward

function palindrome(str){

    //clean the string
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');

    //intialize left and right pointer
    let left = 0;
    
    let right = cleanStr.length-1;

    while(left < right){

    //start comparing from left to right  
    if (cleanStr[left]!==cleanStr[right]){
        return false;
    }
    //increase the left pointer
    left++;
    //decrease the right pointer
    right--;
    

    }
    return true;

}

console.log(palindrome('Madam'));