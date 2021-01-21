import '../App.css';
import React from 'react'
import {propsType} from '../type/quiztype'



export const Questiondiv:React.FC<propsType> = ({question  , quesno,  option , callback , userAnswer}) => {
    // console.log(userAnswer[quesno].correct)
    
    return (
        <div className = 'question-contain'>
            
            <p className = 'question'>{question}</p>
            <div >
                {option.map((opt:string , ind:number)=>{
                    return(
                        <div className = 'options-container' key = {ind}>
                            <button 
                            //  className = {userAnswer[quesno].correct? 'show' : 'hidden'}
                              disabled = {userAnswer} onClick={callback} value = {opt}>{opt}</button>
                        </div>
                       
                        
                    )
                })}
            </div>
            
        </div>
    )
}
