import React, {FC} from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean;
    login: string;
}

export const Header: FC<HeaderPropsType> = ({isAuth, login}) => {
    return (
        <header className={style.header}>
            <div className={style.login}>
                {
                    isAuth
                    ? login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}
