import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching, toggleIsFollowingProgress,
    unFollow,
    UsersDataType,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


type UsersContainerPropsType = {
    usersData: UsersDataType;
    follow: (userID: number) => void;
    unFollow: (userID: number) => void;
    setUsers: (users: UserType[]) => void;
    setCurrentPage: (currentPage: number) => void;
    setUsersTotalCount: (totalUsersCount: number) => void;
    toggleIsFetching: (isFetching: boolean) => void;
    toggleIsFollowingProgress: (isFollowingProgress: boolean, userID: number) => void;
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
            usersAPI.getUsers(this.props.usersData.currentPage, this.props.usersData.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setUsersTotalCount(data.totalCount)
            })
    }

    changeCurrentPage = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

            usersAPI.getUsers(pageNumber, this.props.usersData.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
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
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            />
        </>
    }
}

type mapStateToPropsType = {
    usersData: UsersDataType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersData: state.usersData
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleIsFollowingProgress
})(UsersContainer)
