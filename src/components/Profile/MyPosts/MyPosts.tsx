import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ChangeEvent, FC} from "react";
import {ProfileDataType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
   addPost: () => void;
    changeProfilePost: (text: string) => void;
   postsData: ProfileDataType
}

export const MyPosts: FC<MyPostsPropsType> = ({addPost, changeProfilePost, postsData}) => {

    const post = postsData.posts.map(post => <Post postInfo={post} key={post.id}/>)


    const onAddPosts = () => addPost()
    const onChangeTextAreaText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeProfilePost(e.currentTarget.value)
    }

    return (
        <div>
            <div className={style.item}>
                <div>
                    <span>My posts</span>
                </div>
                <div className={style.newPost}>
                    <textarea placeholder='Enter your message this'  value={postsData.newProfileMessageText}
                              onChange={onChangeTextAreaText}/>
                    <div>
                        <button onClick={onAddPosts}>Add post</button>
                    </div>
                </div>
            </div>
            <div>
                {post}
            </div>
        </div>
    )
}
