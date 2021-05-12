import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {FC} from "react";
import {PostsType} from "../../../redux/state";


type MyPostsTypeProps = {
    data: PostsType[]
}

export const MyPosts: FC<MyPostsTypeProps> = ({data}) => {
    const post = data.map(data => <Post postInfo={data} />)
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
