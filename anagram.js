
    //anagram : two strings contain exact same characters with same frequency but in different order

    function anagram(str1,str2){

        let cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g,'');

        let charCount1 = new Map();
        
        let cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g,'');

        if (cleanStr1.length !== cleanStr2.length){
            return false;
        }

        for (let char of cleanStr1){

            charCount1.set(char,(charCount1.get(char)||0)+1);
            
        }

        for (let char of cleanStr2){

           if (!charCount1.has(char) || charCount1.get(char)=== 0){

            return false;
           }
            charCount1.set(char,charCount1.get(char)-1);
        }
        return true;
       
     
    }
    console.log(anagram('listen','silent'));