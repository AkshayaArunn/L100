import { Exam } from "./Exam";

const exam = new Exam("CS101");

exam.addQuestion({ id: 1, text: "What is OOP?", marks: 5 });
exam.addQuestion({ id: 2, text: "Explain Encapsulation", marks: 5 });

const questions = exam.getQuestions();
console.log(questions);

// questions.push({ id: 3, text: "Hack", marks: 10 });
// questions[0].marks = 100;

exam.submitExam(8);
console.log(exam.getResult());
