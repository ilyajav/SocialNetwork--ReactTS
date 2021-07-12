import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ServerProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router'

type ProfileContainerPropsType = {
    profile: ServerProfileType,
    setUserProfile: (profile: ServerProfileType) => void,
}

type PatchProfileType = {
    userId: string
}

type PropsType = RouteComponentProps<PatchProfileType> & ProfileContainerPropsType

export class ProfileContainer extends React.Component<PropsType>{
    componentDidMount() {
            let userId = this.props.match.params.userId
            if(!userId) userId = '17765'
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile} />
            </>
    }
}

type mapStateToPropsType = {
    profile: ServerProfileType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profileData.profile
    }
}

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)
