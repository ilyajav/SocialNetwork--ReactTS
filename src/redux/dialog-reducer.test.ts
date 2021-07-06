import {
    addDialogMessage,
    changeDialogMessage,
    DialogDataType,
    dialogReducer
} from "./dialog-reducer";
import {v1} from "uuid";


let dialogState: DialogDataType

beforeEach(() =>{
    dialogState = {
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
})

test('new dialog message should be added', () =>{

    const action = addDialogMessage()
    const endState = dialogReducer(dialogState, action)

    expect(endState.usersMessages[5]).toBeDefined()
    expect(endState.usersMessages.length).toBe(6)
})


test('new message title should be changed', () =>{

    const action = changeDialogMessage('newTitle')
    const endState = dialogReducer(dialogState, action)

    expect(endState.newDialogMessage).toBe('newTitle')
})
