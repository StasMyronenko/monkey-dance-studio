import React from 'react'
import headerBg1 from '../../img/header/bgheader1.jpg'
import headerBg2 from '../../img/header/bgheader2.jpg'

import style from './Header.module.scss'

function changeBG(number){
    let elementBg = document.getElementsByClassName(style.header)[0].style.background
    if (elementBg === '' || elementBg === `url("${headerBg1}") center center / cover no-repeat`){
        document.getElementsByClassName(style.header)[0].style.background = `url("${headerBg2}") center center / cover no-repeat`
    } else {
        document.getElementsByClassName(style.header)[0].style.background = `url("${headerBg1}") center center / cover no-repeat`
    }
}
//TODO button free lesson. mb create form with number and name and save it in db.


const Header = () => {
    return <div className={style.header}>
      <section className={style.content} onClick={() => changeBG()}>
          <h1 className={style.title}>Monkey Dance Studio</h1>
          <a src="/" className={style.button_free_lesson}>free lesson</a>
      </section>
    </div>
}

export default Header
