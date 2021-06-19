import {FC} from "react";
import s from './Navbar.module.css'
import {FriendsList} from "./FriendsList/FriendsList";
import {SidebarDataType} from "../../redux/sidebar-reducer";
import {Navigation} from "./Navigation/Navigation";


type NavbarPropsType = {
    friendsData: SidebarDataType
}

export const Navbar: FC<NavbarPropsType> = ({friendsData}) => {
    const friends = friendsData.friends.map((data, index) => <FriendsList friendName={data} key={index} />)
    return (
        <nav className={s.nav}>
            <div>
                <Navigation/>
            </div>
            <div className={s.item}>
                Friends
                <span>{friends}</span>
            </div>
        </nav>
    )
}
