import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleIsFetching,
    unFollow,
    UsersDataType,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Preloader} from "../common/Preloader/Preloader";


type UsersContainerPropsType = {
    usersData: UsersDataType;
    follow: (userID: number) => void;
    unFollow: (userID: number) => void;
    setUsers: (users: UserType[]) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalUsersCount: (totalUsersCount: number) => void;
    toggleIsFetching: (isFetching: boolean) => void;
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersData.currentPage}&count=${this.props.usersData.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    changeCurrentPage = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersData.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.usersData.isFetching ? <Preloader /> : null}
            <Users
                usersData={this.props.usersData}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                onChangeCurrentPage={this.changeCurrentPage}
            />
        </>
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
    toggleIsFetching: (isFetching: boolean) => void;
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
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setUsersTotalCount(totalUsersCount)),
        toggleIsFetching: (isFetching: boolean) => dispatch(toggleIsFetching(isFetching)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
