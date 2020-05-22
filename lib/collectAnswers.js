
const readline = require("readline");

const {EventEmitter} = require("events");
const emitter = new EventEmitter();

module.exports = (questions ) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const answers = [];

    const questionAnswered =  answer => {
        
        emitter.emit("answered", answer, answers);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered);
        }
        else{
            emitter.emit("finished", answers);
        }
    };

    rl.question(questions[0], questionAnswered);

    return emitter;
};