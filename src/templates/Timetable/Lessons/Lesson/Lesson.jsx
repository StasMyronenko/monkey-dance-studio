import React, {useState} from "react";
import style from "./Lesson.module.scss";
import LessonCard from "./LessonCard/LessonCard";

const Lesson = (props) => {
    const [display, setDisplay] = useState("none")

    return <div className={style.lesson} key={props.ind} >
                <div onClick={() => setDisplay('flex')}>
                    <p>{props.el.date}</p>
                    <p>{props.el.time}</p>
                </div>

                <LessonCard el={props.el} display={display} setDisplay={setDisplay} />

            </div>
}

export default Lesson
