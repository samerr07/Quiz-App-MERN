import React, { useEffect, useState } from 'react'
import Question from './Question'
import {useDispatch, useSelector} from "react-redux"
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion'
import { PushAnswer } from '../hooks/setResult'
import {useNavigate,Navigate} from "react-router-dom"

const Quiz = () => {

  const [check, setChecked] = useState(undefined)
  // const state = useSelector(state => state.questions.trace);
  const {queue,trace} = useSelector((state)=>state.questions)
  const result = useSelector(state => state.result.result)
  // const {questions} = useSelector((state)=>state)
  // const state = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // useEffect(()=>{
  //   console.log(trace)
  //   console.log(state)
  //   console.log(result)
  // })

  const handlePrev = ()=>{
    // console.log("Prev")
    if(trace >0){
      dispatch(MovePrevQuestion());
    }
    
  }
  const handleNext = ()=>{
    console.log("Next")
    if(trace < queue.length){
      dispatch(MoveNextQuestion());

      //insert a new result in array
      if(result.length <= trace){
        dispatch(PushAnswer(check))
      }
    }
    setChecked(undefined)
    
  }

  const onChecked = (check)=>{
    // console.log(check)
    setChecked(check);
  }

  // Finished exam after last questions
  if(result.length && result.length >=queue.length){
    return navigate("/result")

    // return <Navigate to={'/result'} replace={true}></Navigate>
  }

  return (
    <div className="container">
      <h1 className='title text-light'>Quiz Application</h1>

      <Question onChecked={onChecked}/>
      
      <div className="grid">
        {
          trace > 0 ? <button onClick={handlePrev} className='btn prev'>Prev</button> : <div></div>
        }
        <button onClick={handleNext} className='btn next'>Next</button>
      </div>
    </div>
  )
}

export default Quiz
