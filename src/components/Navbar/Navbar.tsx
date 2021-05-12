import {FC} from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {FriendsList} from "./FriendsList/FriendsList";
import {FriendsType} from "../../redux/state";

type NavbarPropsType = {
    friendsData: FriendsType[];
}

export const Navbar: FC<NavbarPropsType> = ({friendsData}) => {
    const friends = friendsData.map((data) => <FriendsList friendName={data} />)
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={s.active}> Messages </NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={s.active}> News </NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={s.active}> Music </NavLink>
            </div>
            <div>
                <NavLink to='/settings' activeClassName={s.active}> Settings </NavLink>
            </div>
            <div className={s.item}>
                 Friends
                <span>{friends}</span>
            </div>
        </nav>
    )
}
