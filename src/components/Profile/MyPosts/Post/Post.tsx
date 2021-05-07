import React from "react";
import s from './Post.module.css'
import {PostsType} from "../MyPosts";

type PostPropsType = {
    postInfo: PostsType
}

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img alt='mainPicture' src='https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png'/>
                {props.postInfo.message}
            </div>
            <div>
                <span>like {props.postInfo.likesCount}</span>
            </div>
        </div>
    )
}
