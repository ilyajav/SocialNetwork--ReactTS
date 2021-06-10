import {v1} from "uuid";
import {ActionTypes, PostsType, ProfileDataType} from "./state";

const ADD_PROFILE_POST = 'ADD-PROFILE-POST'
const CHANGE_PROFILE_POST = 'CHANGE-PROFILE-POST'

export const profileReducer = (state: ProfileDataType, action: ActionTypes) => {
    switch (action.type) {
        case ADD_PROFILE_POST:
            const newPost: PostsType = {
                id: v1(),
                message: state.newProfileMessageText,
                likesCount: 7,
            }
            state.posts.push(newPost)
            state.newProfileMessageText = ''
            return state
        case CHANGE_PROFILE_POST:
            state.newProfileMessageText = action.newText;
            return state;
        default:
            return state
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_PROFILE_POST
    } as const
}

export const changeProfilePostActionCreator = (newText: string) => {
    return {
        type: CHANGE_PROFILE_POST,
        newText
    } as const
}