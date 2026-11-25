
// count occurances using Map

function occurances(arr){

    let result = new Map();


    for (let num of arr){

       result.set(num,(result.get(num)||0)+1);
        
    }
    return result;

}
console.log(occurances([1, 2, 2, 3, 1, 4, 2, 3, 5, 1]));