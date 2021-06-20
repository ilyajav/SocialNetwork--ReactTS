import {v1} from "uuid";


export type ActionDialogsTypes = ReturnType<typeof addDialogMessageActionCreator>  | ReturnType<typeof changeDialogMessageActionCreator>

export type UsersDataType = {
    id: string;
    name: string;
}

export type UsersMessagesType = {
    id: string;
    message: string;
}

export type DialogDataType = typeof initialState

const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE'
const CHANGE_DIALOG_MESSAGE = 'CHANGE-DIALOG-MESSAGE'


const initialState = {
    usersInfo: [
        {id: v1(), name: 'Ilya'},
        {id: v1(), name: 'Alexander'},
        {id: v1(), name: 'Svetlana'},
        {id: v1(), name: 'Nadezhda'},
        {id: v1(), name: 'Igor'}
    ],
    usersMessages: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Ok'},
        {id: v1(), message: 'Yes'},
        {id: v1(), message: 'No'},
    ],
    newDialogMessage: ''
}

export const dialogReducer = (state: DialogDataType = initialState , action: ActionDialogsTypes): DialogDataType =>{
    switch (action.type){
        case ADD_DIALOG_MESSAGE:
            const newMessage: UsersMessagesType = {
                id: v1(),
                message: state.newDialogMessage
            }
            return {
                ...state,
                usersMessages: [...state.usersMessages, newMessage],
                newDialogMessage: ''
            }
        case CHANGE_DIALOG_MESSAGE:
            return {
                ...state,
                newDialogMessage: action.newMessage
            }
        default:
            return state
    }
    }

export const addDialogMessageActionCreator = () => {
    return {
        type: ADD_DIALOG_MESSAGE
    } as const
}

export const changeDialogMessageActionCreator = (newMessage: string) => {
    return {
        type: CHANGE_DIALOG_MESSAGE,
        newMessage
    } as const
}
