import React from 'react'
import style from './Menu.module.scss'
import {menuElements} from './menuElements'

function menuScroll(){
    if (window.scrollY){
        document.getElementsByClassName(style.menu)[0].style.background = '#BB7F40';

        document.getElementsByClassName(style.logoText)[0].style['-webkit-text-stroke'] = '2px white';
        const listMenuText = document.getElementsByClassName(style.menuElementText)
        for (let i = 0; i < listMenuText.length; i += 1){
            listMenuText[i].style.color = 'white';
        }
    } else {
        document.getElementsByClassName(style.menu)[0].style.background = 'rgba(0,0,0,0)';

        document.getElementsByClassName(style.logoText)[0].style['-webkit-text-stroke'] = '2px #CF8D48';
        const listMenuText = document.getElementsByClassName(style.menuElementText)
        for (let i = 0; i < listMenuText.length; i += 1){
            listMenuText[i].style.color = '#CF8D48';
        }
    }
}

window.addEventListener('scroll',(event) => {
    menuScroll();
});

//TODO links on other pages. Also make submenu

const Menu = () =>{
    return <div className={style.menu}>
        <div className={style.logo}><h1 className={style.logoText}>MDS</h1></div>
        <div className={style.navigation}>
            <ul className={style.menuList}>
                {menuElements.map((element, ind) => {
                    return <li key={`menu element ${ind}`} className={style.menuElement}>
                        <a href={element.link} className={style.menuElementText}>{element.title}</a>
                    </li>
                })}
            </ul>
        </div>
    </div>
}

export default Menu
