// imagine you have an array like [3, 7, 11, 2, 9]. How would you write JavaScript code to find the sum of all these numbers?

// let numbers = [3, 7, 11, 2, 9];
// let sum = 0;

// for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// console.log(sum);




// imagine you're given a number, say num, and you need to determine whether it's even or odd. How would you write JavaScript code to do that?

// let num = prompt("Enter a number:");

// if (num % 2) {
//     console.log("It's odd number");
// } 
// else {
//     console.log("It's even number");
// }




// imagine you have a string, for example, "hello", and you need to reverse it to "olleh" using JavaScript. How would you approach this problem?


// let text = prompt("Enter text");
// let text2 = "";

// for(let i = text.length - 1; i >= 0; i--) {
//     text2 += text[i];
// }

// console.log(text2);




// suppose you're given a string, such as "radar", and you need to determine whether it's a palindrome (reads the same forwards and backwards). How would you approach this problem using JavaScript?

let text = prompt("Enter text");

function isPalindrome(str) {

    str = str.toLowerCase();
    
    let start = 0;
    let end = str.length - 1;
    
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome(text));
















