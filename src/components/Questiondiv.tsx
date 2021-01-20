// import { type } from 'os'
import React from 'react'
// import { callbackify } from 'util'
import {propsType} from '../type/quiztype'



export const Questiondiv:React.FC<propsType> = ({question , option , quesno , callback , score , userAnswer}) => {
    
    return (
        <div>
            <p>Question: {quesno+1} out of 10</p>
            <p>Your Score:{score}</p>
            <p>{question}</p>
            <div >
                {option.map((opt:string , ind:number)=>{
                    return(
                        <div key = {ind}>
                            <button disabled = {userAnswer} onClick = {callback} value = {opt}>{opt}</button>
                        </div>
                        
                    )
                })}
            </div>
            
        </div>
    )
}
