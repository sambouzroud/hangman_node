var wordsToGuess = ["cat", "dog", "rat", "lion", "tiger", "mouse", "eagle", "cow", "elephant", "snake", "fox"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;