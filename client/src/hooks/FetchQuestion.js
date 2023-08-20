import { useEffect, useState } from "react"
// import data,{answers} from "./../data"
import * as Action from "../redux/questionReducer"
import { useDispatch } from "react-redux"
import axios from "axios";
import { BASEURL } from "../utils/config"

//fetch api data and set value to store
export const useFetchQuestion = ()=>{
    
    const dispatch = useDispatch()
    const [getData, setGetData] = useState({
        isLoading : false ,
        apiData : [],
        serverError : null
    })

    useEffect(()=>{
        setGetData(prev => ({...prev, isLoading:true}));

        // async function fetch backend data 
        (async ()=>{
            try{
                // let question = await data;
                //Api call through backend data
                const {data} = await axios.get(`${BASEURL}/que/questions`)
                
                const {ques} = data
                const [{questions,answers}] = ques
                // console.log(answers);

                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading:false}));
                    setGetData(prev => ({...prev,apiData:questions}))

                    // dispatch an action 

                    dispatch(Action.startExamAction({question:questions,answers}))
                } else {
                    throw new Error("No Question's Availabele")
                }
            } catch(err){
                setGetData(prev => ({...prev, isLoading:false}));
                setGetData(prev => ({...prev,serverError:err}))
            }
        })();
    },[dispatch])

    return [getData,setGetData]
} 


//Move Action Dispatch Function

export const MoveNextQuestion = ()=> async(dispatch)=>{
    try{
        dispatch(Action.moveNextAction())
    }catch(err){
        console.log(err)
    }
}

export const MovePrevQuestion = ()=> async(dispatch)=>{
    try{
        dispatch(Action.movePrevAction())
    }catch(err){
        console.log(err)
    }
}