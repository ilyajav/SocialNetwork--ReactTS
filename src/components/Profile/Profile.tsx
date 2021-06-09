import React, {FC} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfileDataType} from "../../redux/state";

type ProfileTypeProps = {
    postsData: ProfileDataType;
    dispatch: (action: ActionTypes) => void;
}

export const Profile: FC<ProfileTypeProps> = ({postsData, dispatch}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts data={postsData} dispatch={dispatch} />
        </div>
    )
}
