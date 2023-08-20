import React, { useEffect, useState } from "react";
// import data from "./../data";
import { useFetchQuestion } from "../hooks/FetchQuestion";
import { useDispatch, useSelector } from "react-redux";
// import { updateResultAction } from "../redux/resultReducer";
import { updateResult } from "../hooks/setResult";

const Question = ({onChecked}) => {

  const [checked,setChecked] = useState(undefined);

  const [{isLoading,apiData,serverError}] = useFetchQuestion()

  const {trace} = useSelector((state)=>state.questions)
  const questions = useSelector(state => state.questions.queue[state.questions.trace])
  const result = useSelector(state => state.result.result)

  const dispatch = useDispatch()

  const handleSelect = (i) => {
    onChecked(i);
    setChecked(i);
    dispatch(updateResult({trace,checked}))
  };

  // const questions = data[0];

  useEffect(() => {
    // console.log(apiData);
    console.log(questions);
    // console.log(questions);
    dispatch(updateResult({trace,checked}))
  },[checked]);
  
  if(isLoading) return <h3 className="text-light">Loading ......</h3> 
  if(serverError) return <h3 className="text-light">{serverError} || "Unknown Error"</h3>

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>

      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              name="options"
              id={`q${i}-option`}
              value={false}
              onChange={()=>handleSelect(i)}
            />

            <label htmlFor={`q${i}-option`} className="text-primary">
              {q}
            </label>

            <div className={`check ${result[trace] == i ? "checked" : ""}`}></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
