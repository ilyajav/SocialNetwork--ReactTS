import React, {FC} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileDataType} from "../../redux/state";

type ProfileTypeProps = {
    postsData: ProfileDataType;
    addPost: () => void;
    changePost: (newText: string) => void;
}

export const Profile: FC<ProfileTypeProps> = ({postsData, addPost, changePost}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts data={postsData} addPost={addPost} changePost={changePost} />
        </div>
    )
}
