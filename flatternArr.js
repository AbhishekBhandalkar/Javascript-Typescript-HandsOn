
function flatArr(arr,depth = Infinity){

    let result = [];

    for (let element of arr){

        if(Array.isArray(element)&& depth > 0){

            result.push(...flatArr (element ,depth-1));

        }
        else {
            result.push(element);
        }

    }
    return result;
}
console.log(flatArr([1, 2, [3, [4, 5]], [6, [7, [8]]]]));