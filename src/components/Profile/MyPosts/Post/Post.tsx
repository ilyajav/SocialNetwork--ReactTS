import React from "react";
import s from './Post.module.css'
//import {postData} from "../MyPosts";

type PostPropsType = {
    message: string
    likesCount: number
    //data: Array<postData>
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <div>
                <img src='https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png'/>
                {props.message}
            </div>
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}