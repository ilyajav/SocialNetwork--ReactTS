import {FC} from "react";
import {addPostActionCreator, changeProfilePostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";
import {StoreType} from "../../../redux/redux-store";


type MyPostsPropsType = {}

export const MyPostsContainer: FC<MyPostsPropsType> = () => {

    return <StoreContext.Consumer>
        { (store: StoreType) => {
            const state = store.getState().profileData
            const addPosts = () => store.dispatch(addPostActionCreator())
            const changePostText = (text: string) => {
                store.dispatch(changeProfilePostActionCreator(text))
            }
            return <MyPosts addPost={addPosts} changePostText={changePostText} posts={state.posts} newText={state.newProfileMessageText}/>
        }
        }
       </StoreContext.Consumer>
}