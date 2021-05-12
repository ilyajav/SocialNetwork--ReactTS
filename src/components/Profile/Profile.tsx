import React, {FC} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";



type ProfileTypeProps = {
    postsData: PostsType[];
}

export const Profile: FC<ProfileTypeProps> = ({postsData}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts data={postsData} />
        </div>
    )
}
