import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ChangeEvent, createRef, FC} from "react";
import {ActionTypes, ProfileDataType} from "../../../redux/state";

type MyPostsTypeProps = {
    data: ProfileDataType
    dispatch: (action: ActionTypes) => void;
}

export const MyPosts: FC<MyPostsTypeProps> = ({data, dispatch}) => {

    const post = data.posts.map(data => <Post postInfo={data} key={data.id}/>)

    const textareaRef = createRef<HTMLTextAreaElement>();

    const onAddPosts = () => dispatch({type: "ADD-PROFILE-POST"})
    const onChangeTextAreaText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({type: "CHANGE-PROFILE-POST", newText: e.currentTarget.value})
    }

    return (
        <div>
            <div className={s.item}>
                <div>
                    <span>My posts</span>
                </div>
                <div className={s.newPost}>
                    <textarea ref={textareaRef} value={data.newProfileMessageText} onChange={onChangeTextAreaText}/>
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
