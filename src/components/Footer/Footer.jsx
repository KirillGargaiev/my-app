import React from "react";
import p from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={p.footer}>
            <ul>
                <li><a href="https://twitter.com/Kirill95505603">Twitter</a></li>
                <li><a href="mailto:kgargaev@gmail.com">Email</a></li>
                <li><a href="https://github.com/KirillGargaiev">Github</a></li>
                <li>
                    <p>👋</p>
                </li>
            </ul>
        </div>
    )
}

export default Footer;