const word = prompt("Enter a word to find out if it's a palindrome:")
let right_to_left = ""

for (let c = word.length - 1; c >= 0; c--) {
   right_to_left += word[c]
}

if (word == right_to_left) {
   alert("Tour word is palindrome")
} else {
   alert(
      "Tour word isn't palindrome\n" +
      "From left to right, your word is " + word + "\n" +
      "From right to left, your word is " + right_to_left
   )
   
}