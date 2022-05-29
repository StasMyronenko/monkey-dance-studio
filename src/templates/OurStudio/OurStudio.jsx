import React from 'react'
import style from './OurStudio.module.scss'
import {imagesURL} from "./imagesURL";


const OurStudio = () => {
    return <section className={style.ourStudio}>
        <h1 className={style.title}>Our Studio</h1>
        <p className={style.text}>We are the best studio in the world since 1867</p>
        <div className={style.images}>
            {imagesURL.map((url, ind) => (
                <img src={url} alt="dance studio" key={ind} className={style.image}/>
            ))}
        </div>
    </section>
}

export default OurStudio
