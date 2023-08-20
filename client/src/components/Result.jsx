import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import "./../styles/result.css"
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAction } from '../redux/questionReducer'
import { resetResultAction } from '../redux/resultReducer'
import { attemptsNumber, earnPointsNumber, flagResult } from '../helper/helper'
import axios from "axios";
import { BASEURL } from '../utils/config'

const Result = () => {

  const dispatch = useDispatch()
  // const {questions:{queue,answers},result:{result,userId}} = useSelector(state => state);

  const { queue, answers } = useSelector(state => state.questions);
const { result, userId } = useSelector(state => state.result);


  const totalPoints = queue.length * 10;
  const attempts = attemptsNumber(result);
  const earnPoints = earnPointsNumber(result,answers,10)
  const flag = flagResult(totalPoints,earnPoints)
  
  const handleRestart = ()=>{
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }

  (async()=>{
    await axios.post(`${BASEURL}/res/result`,{
            username: userId,
            result,
            attempts,
            points: earnPoints,
            achived: flag ? 'Passed' : 'Failed'
          })
  })();

 


  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">{userId}</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points:</span>
          <span className="bold">{totalPoints ||0}</span>
        </div>
        <div className="flex">
          <span>Total Questions:</span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Total Attempts:</span>
          <span className="bold">{attempts || 0}</span>
        </div>
        <div className="flex">
          <span>Total Earn Points:</span>
          <span className="bold">{earnPoints}</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span style={{ color : `${flag ? "#2aff95" : "#ff2a66" }` }} className="bold">{flag ? "Passed" : "Fail"}</span>
        </div>
      </div>

      <div className="start">
        <Link onClick={handleRestart} className="btn" to={"/"}>Restart</Link>
      </div>

      <div className="container">
        <ResultTable username={userId} earnPoints={earnPoints} attempts={attempts} flag={flag}/>
      </div>
    </div>
  )
}

export default Result
