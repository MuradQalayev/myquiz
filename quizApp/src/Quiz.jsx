import { useState } from "react";
import { resultInitialState } from "./constants";

const Quiz = ({questions}) =>{
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIndex, setAnswerIndex]=useState(null);
    const [answer, setAnswer]=useState(null);
    const [result,setResult] = useState(resultInitialState);
    const [showResult, setShowResult] = useState(false)
    const {question, choices, correctAnswer} =  questions[currentQuestion];
    
    const onAnswerClick = (answer,index) =>{
        setAnswerIndex(index);
        if(answer === correctAnswer){
            setAnswer(true)
        }
        else{
            setAnswer(false)
        }
    }
    const onClickNext = () =>{
        setAnswerIndex(null);
        setResult((prev) =>
            answer 
            ?{
                ...prev,
                score: prev.score + 1,
                correctAnswer: prev.correctAnswer + 1
            } :{
                ...prev,
                wrongAnswer: prev.wrongAnswer + 1
            }
        )
        if(currentQuestion !== questions.length -1){
            setCurrentQuestion(currentQuestion + 1)
        }
        else{
            setCurrentQuestion(0);
            setShowResult(true)
        }
    }


    return (
        <div className="quiz-container">
                {!showResult ? (            <>
                <span className="active-question-no">{currentQuestion + 1}</span>
                <span className="total-question">/{questions.length}</span>
                <h2>{question}</h2>
                <ul>
                    {
                       choices.map((answer,index)=>
                        <li key={answer} onClick={()=>onAnswerClick(answer,index)} className={answerIndex === index ? 'selected-answer':null}>
                            {answer}
                        </li>
                       ) 
                    }
                </ul>
                <div className="footer">
                    <button onClick={onClickNext} disabled ={answerIndex === null}>{currentQuestion === questions.length -1 ? 'Finish': 'Next'}</button>
                </div>
            </>) :<div className="result">
                <h3>Result:</h3>
                <p>
                    Total questions: {questions.length}
                </p>
                <p>
                    Correct answers: {result.score}
                </p>
                <p>
                    Wrong answers: {result.wrongAnswer}
                </p>
                </div>}

        </div>
    );
}

export default Quiz; 