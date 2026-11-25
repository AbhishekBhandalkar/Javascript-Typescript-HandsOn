
function numOps(arr){

    let largest = -Infinity;
    let smallest = Infinity;
    let secLarge = -Infinity;

    for (let num of arr){

        if(num > largest){

            secLarge = largest;
            largest = num;
            
        }else if (num > secLarge && num < largest){
            secLarge = num;
        }
    
         if (num < smallest){

            smallest = num;
        }
    }
    return {
        large :largest,
        small : smallest,
        secondLarge : secLarge
    }

}
console.log(numOps([19,11,65,616,60,88,90]));