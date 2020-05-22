// I have a list of questions
// ask them one by one, record answers
// display all answers when I replied all the questions
const collectAnswer = require("./lib/collectAnswers");


const questions = [
    "How old are you?",
    "What's your favorite food?",
    "What are you going to do with Node.js?"
];

collectAnswer(questions, (answers) => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});
