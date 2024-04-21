let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

//to remove last string
secretMessage.pop();
//add "to" and "program" to the end of the array
secretMessage.push("to", "Program");
console.log(secretMessage.length);
console.log(secretMessage);
// replace the value "easily" with "right"
secretMessage[7] = "right";
console.log(secretMessage);
//remove the first string in the array
secretMessage.shift();
console.log(secretMessage);
//add string "programming" to the front of the array
secretMessage.unshift("Programming");
console.log(secretMessage);
//replace get, right, the, first, time to know
secretMessage.splice(6, 5, "right");
console.log(secretMessage);
//to create a sentence with array
console.log(secretMessage.join(" "));
