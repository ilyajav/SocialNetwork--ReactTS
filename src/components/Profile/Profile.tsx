import React, {FC} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ServerProfileType} from "../../redux/profile-reducer";

type ProfileTypeProps = {
    profile: ServerProfileType;
    status: string;
    changeUserStatus: (status: string) => void;
}

export const Profile: FC<ProfileTypeProps> = ({profile, status, changeUserStatus}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} changeUserStatus={changeUserStatus}/>
            <MyPostsContainer />
        </div>
    )
}
