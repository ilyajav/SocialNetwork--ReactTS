import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ServerProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router'
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type ProfileContainerPropsType = {
    profile: ServerProfileType;
    setUserProfile: (id: string) => void;
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
    }

    render() {

        return <>
            <Profile {...this.props} profile={this.props.profile} />
            </>
    }
}

type mapStateToPropsType = {
    profile: ServerProfileType;
    isAuth: boolean;
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profileData.profile,
        isAuth: state.authData.isAuth,
    }
}

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default WithAuthRedirect(connect
(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)
)
