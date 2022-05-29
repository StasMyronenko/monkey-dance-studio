import React from 'react'
import style from './Lessons.module.scss'
import Lesson from './Lesson/Lesson'

const Lessons = (props) => {
    return <div className={style.lessons}>
        {props.data.map((el, ind) => (
            <Lesson el={el} ind={ind}/>
    ))}
    </div>
}
export default Lessons
