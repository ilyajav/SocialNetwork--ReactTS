import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersDataType, UserType} from "../../redux/users-reducer";

type mapStateToPropsType = {
    usersData: UsersDataType
}
type mapDispatchToPropsType = {
    follow: (userID: number) => void;
    unFollow: (userID: number) => void;
    setUsers: (users: UserType[]) => void;
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersData: state.usersData
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        unFollow: (userID: number) => dispatch(unFollowAC(userID)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)