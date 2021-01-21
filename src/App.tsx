import React, { useEffect , useState } from 'react';
import {fetchquestion} from './services/Apiservice'
import './App.css';
import {Questiondiv} from './components/Questiondiv'
import { QuestionType , answerObject } from './type/quiztype';

function App() {

  let [questions , setquestions] = useState<QuestionType[]>([]);
  let [Qno, setQno] = useState(0);
  let [Score , setScore] = useState(0)
  let [userAnswer , setuserAnswer] = useState<answerObject[]>([])
  let [start , setstart] = useState(false)
  // let correctcss: boolean
  useEffect(()=>{
    const datafromapi = async()=> {
      let result = await fetchquestion(10,'easy')
      setquestions(result)
    
    }
    datafromapi()
    
  },[])
  const answercheck = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    const answer = e.currentTarget.value
    const correct = questions[Qno].answer===answer
    if (correct)  setScore(++Score)
    const answerObj  = {
      question: questions[Qno].question,
      correct,
      answer,
      correctAnswer: questions[Qno].answer
    }
    setuserAnswer(prev => [...prev, answerObj])

  
  }
  if(!questions.length)
    return <div>loading...</div>
  
  return (
    <div className="App">
      <h1 >Quiz App</h1>
      {(!start)? <button className = 'start-button' onClick = {()=>(setstart(true))}>Start Quiz</button>:
      
      <div> 
    
        <h5>Question: {Qno+1} / 10</h5>
        <div className = 'questiondiv'>
          <Questiondiv option = {questions[Qno].options} question = {questions[Qno].question} quesno = {Qno} callback = {answercheck}  userAnswer={userAnswer ? userAnswer[Qno] : undefined } />
          {userAnswer.length === Qno + 1 && Qno <10? <button className = 'submit-button' onClick = {()=>{setQno(++Qno)}}>NEXT QUESTION</button>:null}
      </div>
      </div>
    

      }
    </div>
    
  )
}

export default App;
