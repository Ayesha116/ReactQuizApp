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
  console.log(Qno)
  if(!questions.length)
    return <div>loading...</div>
  
  return (
    <div className="App">
      hey ayesha
      <Questiondiv option = {questions[Qno].options} question = {questions[Qno].question} quesno = {Qno} callback = {answercheck} score = {Score} userAnswer={userAnswer ? userAnswer[Qno] : undefined } />
      {userAnswer.length === Qno + 1 && Qno <10? <button onClick = {()=>{setQno(++Qno)}}>next question</button>:null}
      
    </div>
    
  );
}

export default App;
