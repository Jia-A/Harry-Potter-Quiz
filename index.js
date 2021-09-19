var readlineSync = require("readline-sync");

var playerName = readlineSync.question("Hello magical player. Please state your name : \n");
console.log("Welcome" + " " + playerName + " " + "to this quiz on Harry Potter!!! \n");
console.log("Rules of the game are given below : ");
console.log("  *Do not cheat by browsing your answers. \n  *Write complete spellings of the answer. \n  *You can write the whole answer or the option. \n  *There will be three levels to this game. \n  *Every right answer will give you 1 mark. \n  *You can only reach the next level if you have achieved full marks in the last level in one chance. \n");
var score = 0;
var yn = readlineSync.question("To play the game, enter ALWAYS... \n");
if (yn.toUpperCase() === "ALWAYS") {
    console.log("All the best!! \nHere comes your questions... \n")

    function hogwarts(question, answer, option) {
        var userAnswer = readlineSync.question("# " + question + "\nYour answer is : ");
        if (userAnswer.toUpperCase() === answer.toUpperCase() || userAnswer.toUpperCase() === option.toUpperCase()) {
            console.log("\nYou're correecctt!!");
            score = score + 1;
        } else {
            console.log("I'm sorry, you're wrong!");
            console.log("The right answer is : ", answer.toUpperCase());
        }
        console.log("Your score is : ", score);
        console.log("---------")
    }
} else {
    console.log("Ohh, you didn't wanna play the game? Okay, cool!!");
    



}

var questions = [{
        question: "Who was scared of the spiders? \n a. Ron \n b. Luna \n c. Harry",
        answer: "Ron",
        option: "a"
    },
    {
        question: "What was Harry's Patronus? \n a. Rabbit \n b. Stag \n c. Mouse",
        answer: "Stag",
        option: "b"
    },
    {
        question: "What is Dursley's Address \n a. 7 Privet Drive \n b. 4 Privet Drive \n c. 9 Privet Drive",
        answer: "4 Privet Drive",
        option: "b"
    },
    {
        question: "Which class has a different teacher every year? \n a. Arithmency \n b. Divinition \n c. DADA",
        answer: "DADA",
        option: "c"
    },
    {
        question: "How many hogwarts houses are there? \n a. 3 \n b. 7 \n c. 4",
        answer: "4",
        option: "c"
    },
    {
        question: "What subject does Hagrid Teach? \n a. Magical Creatures \n b. Arithmency \n c. Astrology",
        answer: "Magical Creatures",
        option: "a"
    },
    {
        question: "What is the name of the poltergiest that lives at Hogwarts? \n a. Peeves \n b. Prunes \n c. Pintonio",
        answer: "Peeves",
        option: "a"
    },
    {
        question: "What is the name of Hermione's Cat? \n a. Pigwidgeon \n b. Hedwig \n c. Crookshanks",
        answer: "Crookshanks",
        option: "c"
    },
    {
        question: "What is the platform no. for Hogwarts express? \n a. 9 1/4 \n b. 9 3/4 \n c. 8 1/4",
        answer: "9 3/4",
        option: "b"
    },
    {
        question: "What was Snape's Patronus? \n a. Doe \n b. Stag \n c. Deer",
        answer: "Doe",
        option: "a"
    },
    {
        question: "What potion can change you into someone else's appearence? \n a. Wolfsbane \n b. Polyjuice \n c. Veritaserum",
        answer: "Polyjuice",
        option: "b"
    },
    {
        question: "How many Harry Potter books are there including Cursed Child? \n a. 9  \n b. 7 \n c. 8 ",
        answer: "8",
        option: "c"
    },
    {
        question: "What is the third word in Dumbledore's name? \n a. Percival \n b. Brian \n c. Wulfric",
        answer: "9 3/4",
        option: "b"
    },
    {
        question: "How many horcruxes does Voldemort make? \n a. 7 \n b. 8 \n c. 4",
        answer: "7",
        option: "a"
    },
    {
        question: "Who was Winky? \n a. McGonagall's house elf \n b. Dumbledore's house elf \n c. Barty Crouch's house elf",
        answer: "Barty Crouch's house elf",
        option: "c"
    },
];
for (var j = 0; j < 1; j++) {


    if (score < 6) {
        for (var i = 0; i < 5; i++) {
            hogwarts(questions[i].question, questions[i].answer, questions[i].option)
        }
        if (score === 5) {
            console.log("Yayyyy, you completed Level 1!! \n");
        } else {
            console.log("Sorry Wizzy, You needed to score 5 marks for going into next level!!");
            break;
        }
    }
    if (score > 4 && score < 11) {
        console.log("You just entered Level 2... \n");
        for (var i = 5; i < 10; i++) {
            hogwarts(questions[i].question, questions[i].answer, questions[i].option)
        }
        if (score === 10) {
            console.log("Ohh so you really are a wizard, coooool!! \n");
        } else {
            console.log("You played this far, that's awesome!! Try to reach the next level next time by scoring a perfect 10...");
            break;
        }
    }
    if (10 <= score) {
        console.log("Aren't you the best Wizzy? You just entered Level 3!! \n");
        for (var i = 10; i < 15; i++) {
            hogwarts(questions[i].question, questions[i].answer, questions[i].option)
        }
        if (score === 15) {
            console.log("You are officially the best wizard in the history of Hogwarts!!!! Congrats!! \n")
        } else {
            console.log("Ohh, You're magical!!")
        }
    }
}



console.log("Thank you for playing!!!")
