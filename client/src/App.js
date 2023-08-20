import {BrowserRouter, Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { CheckUserExist } from "./helper/helper";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
          <Route path="/quiz" element={
          <CheckUserExist>
            <Quiz/>
          </CheckUserExist>
          }/>
        
        
        
          <Route path="/result" element={<Result/>}/>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
