import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

// export type postData = {
//     message: string
//     likesCount: number
// }
// const postDataUser1: Array<postData> = [
//     {message : 'How are you?', likesCount : 5 },
// ]

// const postDataUser2: Array<postData> = [
//     {message : 'Good day', likesCount :10}
// ]



export const MyPosts = () => {
    return (
        <div>
            <div className={s.item}>
                <div>
                    <span>My posts</span>
                </div>
                <div className={s.newPost}>
                    <textarea/>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
            <div>
                <Post message='How are you?' likesCount={5}/>
                <Post message='Good day' likesCount={10}/>
            </div>
        </div>
    )
}

//message='How are you?' likesCount={5}
//message='Good day' likesCount={10}