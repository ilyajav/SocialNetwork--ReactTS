import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {changeUserStatus, ServerProfileType, setUserProfile, setUserStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router'
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type ProfileContainerPropsType = {
    profile: ServerProfileType;
    setUserProfile: (id: string) => void;
    status: string;
    setUserStatus: (id: string) => void;
    changeUserStatus: (status: string) => void;
}

type PatchProfileType = {
    userId: string;
}

type PropsType = RouteComponentProps<PatchProfileType> & ProfileContainerPropsType

export class ProfileContainer extends React.Component<PropsType>{
    componentDidMount() {
             let userID = this.props.match.params.userId
             if(!userID) userID = '17765'
             this.props.setUserProfile(userID)
             this.props.setUserStatus(userID)
    }

    render() {

        return <>
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                changeUserStatus={this.props.changeUserStatus}
            />
            </>
    }
}

type mapStateToPropsType = {
    profile: ServerProfileType;
    status: string;
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profileData.profile,
        status: state.profileData.status,
    }
}

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default compose<React.ComponentType>(
    connect
    (mapStateToProps, {setUserProfile, setUserStatus,  changeUserStatus}),
     withRouter,
    WithAuthRedirect
)(withUrlDataContainerComponent)
