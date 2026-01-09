"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Exam_1 = require("./Exam");
var exam = new Exam_1.Exam("CS101");
exam.addQuestion({ id: 1, text: "What is OOP?", marks: 5 });
exam.addQuestion({ id: 2, text: "Explain Encapsulation", marks: 5 });
var questions = exam.getQuestions();
console.log(questions);
// These lines should NOT work (encapsulation)
// questions.push({ id: 3, text: "Hack", marks: 10 });
// questions[0].marks = 100;
exam.submitExam(8);
console.log(exam.getResult());
