// I have a list of questions
// ask them one by one, record answers
// display all answers when I replied all the questions

const readline = require("readline");

const questions = [
    "How old are you?",
    "What's your favorite food?",
    "What are you going to do with Node.js?"
];


answer(questions, (answers) => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});

function answer(questions, done ) {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const answers = [];

    const questionAnswered =  answer => {
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered);
        }
        else{
            done(answers);
        }
        
    };

    rl.question(questions[0], questionAnswered);
}