import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    followSet,
    getUsers,
    setCurrentPage,
    unFollowSet,
    UsersDataType,
} from "../../redux/users-reducer";
import React from "react";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


type UsersContainerPropsType = {
    usersData: UsersDataType;
    setCurrentPage: (currentPage: number) => void;
    getUsers: (currentPage: number, pageSize: number) => void;
    followSet: (id: number) => void;
    unFollowSet: (id: number) => void;
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.usersData.currentPage, this.props.usersData.pageSize)
    }

    changeCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.usersData.pageSize)
    }

    render() {
        return <>
            {this.props.usersData.isFetching ? <Preloader/> : null}
            <Users
                usersData={this.props.usersData}
                onChangeCurrentPage={this.changeCurrentPage}
                followSet={this.props.followSet}
                unFollowSet={this.props.unFollowSet}
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setCurrentPage,
        getUsers,
        followSet,
        unFollowSet,
    }),
    WithAuthRedirect,
)(UsersContainer)
