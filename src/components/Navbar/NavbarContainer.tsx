import {Navbar} from "./Navbar";
import {connect} from "react-redux";
import {SidebarDataType} from "../../redux/sidebar-reducer";
import {AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    friendsData: SidebarDataType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return{
        friendsData: state.sidebarData,
    }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)
