import {ActionTypes, DialogDataType, UsersMessagesType} from "./state";
import {v1} from "uuid";

const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE'
const CHANGE_DIALOG_MESSAGE = 'CHANGE-DIALOG-MESSAGE'

export const dialogReducer = (state: DialogDataType , action: ActionTypes) =>{
    switch (action.type){
        case ADD_DIALOG_MESSAGE:
            const newMessage: UsersMessagesType = {
                id: v1(),
                message: state.newDialogMessage
            }
            state.usersMessages.push(newMessage);
            state.newDialogMessage = '';
            return state
        case CHANGE_DIALOG_MESSAGE:
            state.newDialogMessage = action.newMessage;
            return state;
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
