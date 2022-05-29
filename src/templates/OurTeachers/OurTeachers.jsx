import React from 'react'
import style from './OurTeachers.module.scss'
import {teachers} from "./teachers";

const OurTeachers = () => {
    return <section className={style.ourTeachers}>
        <h1 className={style.title}>Our Teachers</h1>
        <div className={style.teachers}>
            {teachers.map((teacher, ind) => {
                const img = <img src={teacher.imageURL} alt="teacher" className={style.teacherIMG}/>
                const p = <p className={style.teacherText}>{teacher.name + teacher.text}</p>
                if (ind % 2 === 0){
                    return <div className={style.teacher} key={ind}>
                        {img}
                        {p}
                </div>
                }
                else {
                    return <div className={style.teacher} key={ind}>
                        {p}
                        {img}
                </div>
                }
            })}
        </div>
    </section>
}

export default OurTeachers
