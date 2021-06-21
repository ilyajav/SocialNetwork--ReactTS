import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, unFollowAC, UsersDataType} from "../../redux/users-reducer";

type mapStateToPropsType = {
    usersData: UsersDataType
}
type mapDispatchToPropsType = {
    follow: (userID: string) => void;
    unFollow: (userID: string) => void;
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersData: state.usersData
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: string) => dispatch(followAC(userID)),
        unFollow: (userID: string) => dispatch(unFollowAC(userID))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)