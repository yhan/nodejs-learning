// I have a list of questions
// ask them one by one, record answers
// display all answers when I replied all the questions
const collectAnswer = require("./lib/collectAnswers");
const {EventEmitter} = require("events");
const emitter = new EventEmitter();

const questions = [
    "How old are you?",
    "What's your favorite food?",
    "What are you going to do with Node.js?"
];

emitter.on("answered", (a, answers) => {
    answers.push(a);
});

emitter.on("finished", allAnswers => {
    console.log("Thank you for your answers. ");
    console.log(allAnswers);
    process.exit();
});


collectAnswer(questions, emitter);
