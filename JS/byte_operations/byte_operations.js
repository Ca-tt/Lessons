// Here's how to do basic integer<->byte (string/char) operations in JavaScript.
// Took me a good while to dig this up.

function intToChar(integer) {
    return String.fromCharCode(integer)
}

function charToInt(char) {
    return char.charCodeAt(0)
}

// Example:

intToChar(90) // --> "Z"

charToInt("Z") // --> 90

// found on
// https://stackoverflow.com/questions/3195865/converting-byte-array-to-string-in-javascript
function bin2String(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
        result += String.fromCharCode(parseInt(array[i], 2));
    }
    return result;
}

bin2String(["01100110", "01101111", "01101111"]); // "foo"

// Using your string2Bin function to test:
bin2String(string2Bin("hello world")) === "hello world";

function string2Bin(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
        result.push(str.charCodeAt(i).toString(2));
    }
    return result;
}