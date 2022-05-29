import React from 'react'
import style from './LessonCard.module.scss'


const LessonCard = (props) => {
    return (
        <div className={style.lessonCardBG} style={{display: props.display}}>
            <div className={style.lessonCard}>
                <header>
                    <p className={style.cross} onClick={() => {
                        props.setDisplay("none");
                    }}>&#10006;</p>
                </header>
                <main>
                    <div className={style.description}>
                        <h3>Date: {props.el.date}</h3>
                        <h3>Time: {props.el.time}</h3>
                        <h3>Teacher: {props.el.teacher}</h3>
                        <p>{props.el.note}</p>
                    </div>
                    <div className={style.divForm}>
                        <form>
                            <label htmlFor={style.inputName}>Your Name</label>
                            <input type="text" id={style.inputName}/>

                            <label htmlFor={style.inputPhone}>Your Phone</label>
                            <input type="tel" id={style.inputName}/>

                            <button type="submit">Reserve</button>

                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default LessonCard
