/**
 *
 * @param array
 */
function lazyFlatArray(array) {
    return array.reduce((initialValue, nextValue) => Array.isArray(nextValue) ? initialValue.concat(lazyFlatArray(nextValue)) : initialValue.concat(nextValue), [])
}

/**
 *
 * @param array
 * @param initialValue
 */
function fasterFlatArray(array, initialValue = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) && array.length > 0)
            fasterFlatArray(array[i], initialValue);
        else
            initialValue.push(array[i])
    }
    return initialValue;
}

/**
 * Returns a Random number having 1 as minimum 
 * @param {*} max 
 */
function getRandom(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 1)) + 1;
}

/**
 * Returns a nested array with random values of arrays and integers
 * @param {*} initialValue 
 */
function createsNestedArray(initialValue) {
    let initialArray = [];
    if (initialValue) {
        initialArray.push(initialValue);
    }
    let i = getRandom(10);
    while (i > 0){
        switch (getRandom(2)) {
            case 1:initialArray.push(getRandom(10))
                break;
            case 2 : initialArray.push(createsNestedArray(getRandom(10)));
            default:
                break;
        }
        i--;
    }
    if (initialArray.length  === 0)
        initialArray.push(getRandom(10))
    return initialArray;
}

module.exports =  {
    lazyFlatArray,
    fasterFlatArray,
    createsNestedArray
}
