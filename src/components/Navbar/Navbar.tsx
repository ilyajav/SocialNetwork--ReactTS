import React from "react";
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a>Profile</a>
            </div>
            <div className={`${s.nav} ${s.active} `}>
                <a> Messages </a>
            </div>
            <div>
                <a> News </a>
            </div>
            <div>
                <a> Music </a>
            </div>
            <div>
                <a> Settings </a>
            </div>
        </nav>
    )
}