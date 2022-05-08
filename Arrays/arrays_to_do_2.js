// Reverse
// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. 
// Working 'in-place' means that you cannot use a second array – move values within the array that you are given. 
// As always, do not use built-in array functions such as splice().copy

function Reverse(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}


// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. 
// Shift arr's values to the right by that amount. 
// 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. 
// Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. 
// Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.copy

function Rotate(arr, moveBy) {
var actualMovementsNeeded;
    if (moveBy > 0) {
        actualMovementsNeeded = moveBy % arr.length;
    } else {
        actualMovementsNeeded = Math.abs(moveBy) % arr.length;
    }
    if (moveBy > 0) {
        for (var i = 0; i < actualMovementsNeeded; i++) {
            var temp = arr[arr.length - 1];
            for (var x = arr.length - 2; x >= 0; x--) {
                arr[x+1] = arr[x];
            }
            arr[0] = temp;
        }
    } else {
        for (var i = 0; i < actualMovementsNeeded; i++) {
            var temp = arr[0];
            for (var x = 1; x < arr.length; x++) {
                arr[x-1] = arr[x];
            }
            arr[arr.length - 1] = temp; 
        }
    }
}

// Filter Range
// Alan is good at breaking secret codes. 
// One method is to eliminate values that lie outside of a specific known range. 
// Given arr and values min and max, retain only the array values between min and max. 
// Work in-place: return the array you are given, with values in original order. 
// No built-in array functions.copy

function filterRange(arr, min, max) {
    for (var i = arr.length-1; i >= 0; i--) {
        if (arr[i] <= min || arr[i] >= max) {
            for (var x = i; x < arr.length; x++) {
                arr[x+1] = arr[x];
            }
            arr.length--;
            i--;
        }
    }
}


// Concat
// Replicate JavaScript's concat(). 
// Create a standalone function that accepts two arrays. 
// Return a new array containing the first array's elements, followed by the second array's elements. 
// Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function concat(arr1, arr2) {
    var arr3 = [];
    var ind = 0;
    for (var i = 0; i < arr.length; i++) {
        arr3[ind] = arr1[i];
        ind++;
    }
    for (var x = 0; x < arr.length; x++) {
        arr3[ind] = arr2[i];
        ind++;
    }
    return arr3;
}