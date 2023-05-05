import { useState } from "react";
import { quiz } from "./Questions.js";
import "./Teste.css";
import "./Navbar.css";
import "./App.css";

function Text() {
    return (
        <p>text</p>
    );
}
const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showText, setShowText] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        magellan: 0,
        america: 0,
        india: 0,
    })

    const { questions } = quiz
    const { question, choices, correctAnswer } = questions[activeQuestion]

    const onClickRetake = () => window.location.reload(true)

    const onClickNext = () => {
        setSelectedAnswerIndex(null)
        setResult((prev) =>
            selectedAnswer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : { ...prev,
                    wrongAnswers: prev.wrongAnswers + 1,
                    /*if (answer.theme == 'magellan') {
                       prev.magellan += 1;
                    },
                    if (answer.theme == 'america'){
                        prev.america += 1;
                    },
                    if (answer.theme == 'india'){
                        prev.india += 1;
                    },*/
                }
        )
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
            setShowText(true);
        } else {
            setActiveQuestion(0)
            setShowResult(true)
        }
    }

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        if (answer === correctAnswer) {
            setSelectedAnswer(true)
        } else {
            setSelectedAnswer(false)
        }
    }

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
    return (
        <div>
            <div className="quiz-container">
                {!showResult ? (
                    <div>
                        <div>
                            <span className="active-question-no">
                                {addLeadingZero(activeQuestion + 1)}
                            </span>
                            <span className="total-question">
                                /{addLeadingZero(questions.length)}
                            </span>
                            </div>
                            <h2>{question}</h2>

                            <ul>
                                {choices.map((answer, index) => (
                            <li
                                onClick={() => onAnswerSelected(answer, index)}
                                key={answer}
                                className={
                                selectedAnswerIndex === index ? 'selected-answer' : null
                                }>
                                {answer}
                            </li>
                            ))}
                            </ul>

                            <div className="flex-right">
                                <button
                                onClick={onClickNext}
                                disabled={selectedAnswerIndex === null}>
                                {activeQuestion === questions.length - 1 ? 'Trimite' : 'Următorul'}
                                </button>
                            </div>
                        </div>
                        ) : (
                        <div className="result">
                            <h3>Result</h3>
                            <h2>
                                Numărul de întrebări: <span>{questions.length}</span>
                            </h2>
                            <h2>
                                Scoul total:<span> {result.score}</span>
                            </h2>
                            <h2>
                                Răspunsuri corecte:<span> {result.correctAnswers}</span>
                            </h2>
                            <h2>
                                Răspunsuri greșite:<span> {result.wrongAnswers}</span>
                            </h2>
                            <button onClick={onClickRetake}>Reia testul!</button>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default Quiz;