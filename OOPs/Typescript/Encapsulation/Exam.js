"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam(examId) {
        this.questions = [];
        this.totalScore = 0;
        this.isSubmitted = false;
        this.examId = examId;
    }
    Exam.prototype.addQuestion = function (question) {
        if (this.isSubmitted) {
            throw new Error("Cannot add questions after submission");
        }
        this.questions.push(__assign({}, question));
    };
    Exam.prototype.getQuestions = function () {
        return this.questions.map(function (q) { return (__assign({}, q)); });
    };
    Exam.prototype.submitExam = function (score) {
        if (this.isSubmitted) {
            throw new Error("Exam already submitted");
        }
        if (score < 0 || score > this.getMaxMarks()) {
            throw new Error("Invalid score");
        }
        this.totalScore = score;
        this.isSubmitted = true;
    };
    Exam.prototype.getResult = function () {
        if (!this.isSubmitted) {
            return "Exam not submitted yet";
        }
        return "Score: ".concat(this.totalScore, " / ").concat(this.getMaxMarks());
    };
    Exam.prototype.getMaxMarks = function () {
        return this.questions.reduce(function (sum, q) { return sum + q.marks; }, 0);
    };
    return Exam;
}());
exports.Exam = Exam;
