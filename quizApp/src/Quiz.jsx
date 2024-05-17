import { useState } from "react";

const Quiz = ({questions}) =>{
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIndex, setAnswerIndex]=useState(null);
    const [answer, setAnswer]=useState(null);

    
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

    return (
        <div className="quiz-container">
            <>
                <span className="active-question-no">{currentQuestion + 1}</span>
                <span className="total-question">/{questions.length}</span>
                <h2>{question}</h2>
                <ul>
                    {
                       choices.map((answer,index)=>{
                        <li key={answer} onClick={()=>onAnswerClick(answer,index)} className={answerIndex === index ? 'selected-answer':null}>
                            {answer}
                        </li>
                       }) 
                    }
                </ul>
            </>
        </div>
    );
}

export default Quiz; 