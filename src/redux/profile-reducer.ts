import {v1} from "uuid";


enum ACTION_TYPES{
     ADD_PROFILE_POST = 'ADD-PROFILE-POST',
     CHANGE_PROFILE_POST = 'CHANGE-PROFILE-POST',
}

export type ActionProfileTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof changeProfilePost>

export type PostsType = {
    id: string;
    message: string;
    likesCount: number;
}

export type ProfileDataType = typeof initialState

const initialState = {
    posts: [
        {id: v1(), message: 'How are you?', likesCount: 5},
        {id: v1(), message: 'Good day', likesCount: 10},
        {id: v1(), message: 'New York', likesCount: 6}
    ],
    newProfileMessageText: ''
}

export const profileReducer = (state: ProfileDataType = initialState, action: ActionProfileTypes): ProfileDataType => {
    switch (action.type) {
        case ACTION_TYPES.ADD_PROFILE_POST:
            const newPost: PostsType = {
                id: v1(),
                message: state.newProfileMessageText,
                likesCount: 7,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newProfileMessageText: ''
            }
        case ACTION_TYPES.CHANGE_PROFILE_POST:
            return {
                ...state,
                newProfileMessageText: action.newText
            }
        default:
            return state
    }

}

export const addPost = () => {
    return {
        type: ACTION_TYPES.ADD_PROFILE_POST,
    } as const
}

export const changeProfilePost = (newText: string) => {
    return {
        type: ACTION_TYPES.CHANGE_PROFILE_POST,
        newText,
    } as const
}
