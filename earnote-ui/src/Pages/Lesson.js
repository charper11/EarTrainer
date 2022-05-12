import { Button } from '@mui/material';
import { useState } from 'react';
import Question from "../Components/Question.js";
import StartPopUp from '../Components/StartPopUp.js';
import "./Lesson.css";

const Lesson = ({score, setScore, questions, lessonKey, lessonUnit}) => {

    const [currQues, setCurrQues] = useState(0);
    const [isFirst, setIsFirst] = useState(true);

    return (
        <div className='lesson'>
            <div className='lessonInfo'>
              <span>Unit {lessonUnit} key of {lessonKey}</span>
              <span>Score: {score}</span>
            </div>
            { 1 === 1 ? (<Question
              currQues={currQues}
              setCurrQues={setCurrQues}
              questions={questions}
              score={score}
              setScore={setScore}
            />) : (
                <div>test</div>
            )}
            {isFirst ? <StartPopUp setIsFirst={setIsFirst} /> : null}
        </div>
    );
};

export default Lesson;