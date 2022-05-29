import React, {useState, useEffect} from 'react'
import style from './Timetable.module.scss'
import {timetableURL} from "../../settings";
import Lessons from "./Lessons/Lessons";

const Timetable = () => {
    const [data, setData] = useState([])
    useEffect(() =>{
        const fetchData = async () => {
            try{
                const response = await fetch(timetableURL)
                const jsonData = await response.json()
                setData(jsonData)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])

    return <section className={style.timetable}>
        <h1 className={style.title}>Timetable</h1>
        <div className={style.divText}>
            <p className={style.text}>We have classes throughout the day, so you can choose a time convenient for you</p>
        </div>
        <Lessons data={data}/>

    </section>
}

export default Timetable
