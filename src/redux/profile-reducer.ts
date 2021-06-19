import {v1} from "uuid";

const ADD_PROFILE_POST = 'ADD-PROFILE-POST'
const CHANGE_PROFILE_POST = 'CHANGE-PROFILE-POST'

export type ActionProfileTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof changeProfilePostActionCreator>

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
    const stateCopy = {
        ...state,
        posts: [...state.posts]
    }
    switch (action.type) {
        case ADD_PROFILE_POST:
            const newPost: PostsType = {
                id: v1(),
                message: state.newProfileMessageText,
                likesCount: 7,
            }
            stateCopy.posts.push(newPost)
            stateCopy.newProfileMessageText = ''
            return stateCopy
        case CHANGE_PROFILE_POST:
            stateCopy.newProfileMessageText = action.newText;
            return stateCopy;
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
