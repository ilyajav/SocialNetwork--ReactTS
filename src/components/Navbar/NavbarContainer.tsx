import {Navbar} from "./Navbar";
import {connect} from "react-redux";
import {SidebarDataType} from "../../redux/sidebar-reducer";
import {AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    friendsData: SidebarDataType
}

type mapDispatchToPropsType = {}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return{
        friendsData: state.sidebarData
    }
}

const mapDispatchToProps = (): mapDispatchToPropsType =>{
    return {}
}

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)
