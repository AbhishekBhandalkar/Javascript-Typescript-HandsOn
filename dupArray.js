
function duplicates(arr) {

    let seen = new Set();


    for (let num of arr) {

        if (!seen.has(num)) {

            seen.add(num);

        }

    }
    return [...seen];
}
console.log(duplicates([7, 9, 8, 3, 4, 7, 8, 3]));
