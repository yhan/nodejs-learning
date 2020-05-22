
const readline = require("readline");

module.exports = (questions, done ) => {
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
};