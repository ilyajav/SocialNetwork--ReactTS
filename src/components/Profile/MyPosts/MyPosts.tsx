import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ChangeEvent, createRef, FC} from "react";
import {PostsType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
   addPost: () => void;
   changePostText: (text: string) => void;
   posts:  PostsType[];
   newText: string;
}

export const MyPosts: FC<MyPostsPropsType> = ({addPost, changePostText, posts, newText}) => {

    const post = posts.map(post => <Post postInfo={post} key={post.id}/>)

    const textareaRef = createRef<HTMLTextAreaElement>();

    const onAddPosts = () => addPost()
    const onChangeTextAreaText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changePostText(e.currentTarget.value)
    }

    return (
        <div>
            <div className={s.item}>
                <div>
                    <span>My posts</span>
                </div>
                <div className={s.newPost}>
                    <textarea placeholder='Enter your message this' ref={textareaRef} value={newText}
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
