import React, {FC} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ServerProfileType} from "../../redux/profile-reducer";

type ProfileTypeProps = {
    profile: ServerProfileType;
}

export const Profile: FC<ProfileTypeProps> = ({profile}) => {
    return (
        <div>
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </div>
    )
}
