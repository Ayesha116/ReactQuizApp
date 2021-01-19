import {Quiz} from '../type/quiztype';
export const fetchquestion = async(amount:number , difficulty:string): Promise<Quiz[]> =>{
    
    const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=17&difficulty=${difficulty}&type=multiple`)
    let {results} = await response.json()
    const myquiz = results.map((questionObj: Quiz)=>{
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            options: questionObj.incorrect_answers.concat(questionObj.correct_answer)
        }
    })
    return myquiz
}