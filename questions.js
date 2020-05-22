// I have a list of questions
// ask them one by one, record answers
// display all answers when I replied all the questions
const collectAnswer = require("./lib/collectAnswers");

const questions = [
    "How old are you?",
    "What's your favorite food?",
    "What are you going to do with Node.js?"
];

const answered = collectAnswer(questions);

answered.on("answered", (a, answers) => {
    answers.push(a);
});


// Order of subscription is treated in the order of file arrangement
answered.on("finished", allAnswers => {
    console.log("Thank you for your answers. ");
    console.log(allAnswers);
});

answered.on("finished", allAnswers => {
    process.exit();
});
