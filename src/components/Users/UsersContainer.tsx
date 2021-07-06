import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {follow, setUsers, unFollow, UsersDataType, UserType} from "../../redux/users-reducer";

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
        follow: (userID: number) => dispatch(follow(userID)),
        unFollow: (userID: number) => dispatch(unFollow(userID)),
        setUsers: (users: UserType[]) => dispatch(setUsers(users)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
