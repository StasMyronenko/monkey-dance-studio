import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
    return <footer>
        <div className={style.footerMenu}>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
        <div className={style.corporation}>
            <p>&copy;MDS</p>
        </div>
    </footer>
}

export default Footer
