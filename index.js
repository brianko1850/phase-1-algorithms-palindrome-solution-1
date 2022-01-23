function isPalindrome(word) {
  // Write your algorithm here
  let array = Array.from(word)
  let reversedWord = array.reverse().join('')

  if (word === reversedWord) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  reverse String (break up in to Array, reverse Array, join array into string)
// if string = reverse string then return true
// else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
