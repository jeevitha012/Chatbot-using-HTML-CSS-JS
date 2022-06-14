function getBotResponse(input) {
//rock paper scissors
if (input == "rock") {
return "paper";
} else if (input == "paper") {
return "scissors";
} else if (input == "scissors") {
return "rock";
} // Simple responses
if (input == "hello") {
return "Hello there!";
} else if (input == "goodbye") {
return "Talk to you later!";
} else if (input == "Can i know about you") {
return "Yes ofcourse!I am chatbot";
} else if (input == "Heart clicked!") {
return "Heart Clicked";
} else {
return "Try asking something else!";
}
}
