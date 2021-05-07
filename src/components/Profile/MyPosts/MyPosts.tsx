import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


export type PostsType = {
    message: string,
    likesCount: number
}

const posts: Array<PostsType> = [
    {message: 'How are you?', likesCount: 5},
    {message: 'Good day', likesCount: 10},
    {message: 'New York', likesCount: 6}
]

export const MyPosts = () => {
    let post = posts.map(data => <Post postInfo={data}/>)
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
                {post}
            </div>
        </div>
    )
}
