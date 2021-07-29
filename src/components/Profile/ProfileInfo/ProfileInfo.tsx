import React, {FC} from "react";
import style from './ProfileInfo.module.css'
import {ServerProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "./../../../assets/userPhoto.jpg"
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ServerProfileType;
    status: string;
    changeUserStatus: (status: string) => void;
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, status, changeUserStatus}) => {

    if(!profile) return  <Preloader />

    return (
        <div className={style.items}>
            <div className={style.userPhoto}>
                <img alt='userProfile' src={profile.photos?.small || userPhoto}/>
                <div>
                    Name: {profile.fullName},
                    VK: {profile.contacts?.vk || 'No data'},
                    about user: {profile?.aboutMe || 'No data'}
                </div>
                <div className={style.status}>
                    <h3>Status:</h3>
                </div>
                <div>
                    <ProfileStatus status={status} changeUserStatus={changeUserStatus}/>
                </div>
            </div>
        </div>
)
}
