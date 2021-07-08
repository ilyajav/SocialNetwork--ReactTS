import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    unFollow,
    UsersDataType,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";


type UsersContainerPropsType = {
    usersData: UsersDataType;
    follow: (userID: number) => void;
    unFollow: (userID: number) => void;
    setUsers: (users: UserType[]) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalUsersCount: (totalUsersCount: number) => void;
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersData.currentPage}&count=${this.props.usersData.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    changeCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersData.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            usersData={this.props.usersData}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            onChangeCurrentPage={this.changeCurrentPage}
        />
    }

}

type mapStateToPropsType = {
    usersData: UsersDataType
}
type mapDispatchToPropsType = {
    follow: (userID: number) => void;
    unFollow: (userID: number) => void;
    setUsers: (users: UserType[]) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalUsersCount: (totalUsersCount: number) => void;
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
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPage(currentPage)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setUsersTotalCount(totalUsersCount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
