import {v1} from "uuid";
import {addPostActionCreator, changeProfilePostActionCreator, profileReducer} from "./profile-reducer";
import {addDialogMessageActionCreator, changeDialogMessageActionCreator, dialogReducer} from "./dialog-reducer";

export type PostsType = {
    id: string;
    message: string;
    likesCount: number;
}

export type UsersMessagesType = {
    id: string;
    message: string;
}

export type UsersDataType = {
    id: string;
    name: string;
}

export type ProfileDataType = {
    posts: PostsType[];
    newProfileMessageText: string;
}

export type DialogDataType = {
    usersInfo: UsersDataType[];
    usersMessages: UsersMessagesType[];
    newDialogMessage: string;
}

export type FriendsType = {
    name: string;
}

type SidebarDataType = {
    friends: FriendsType[];
}

export type RootStateType = {
    dialogData: DialogDataType;
    profileData: ProfileDataType;
    sidebarData: SidebarDataType;
}

type StoreType = {
    _state: RootStateType
    _callRender: () => void;
    subscriber: (observer: () => void) => void;
    getState: () => RootStateType;
    dispatch: (action: ActionTypes) => void;
}

export type ActionTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeProfilePostActionCreator>
    | ReturnType<typeof addDialogMessageActionCreator>
    |ReturnType<typeof changeDialogMessageActionCreator>


export const store: StoreType = {
    _state: {
        dialogData: {
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
        },
        profileData: {
            posts: [
                {id: v1(), message: 'How are you?', likesCount: 5},
                {id: v1(), message: 'Good day', likesCount: 10},
                {id: v1(), message: 'New York', likesCount: 6}
            ],
            newProfileMessageText: ''
        },
        sidebarData: {
            friends: [
                {name: 'friend 1'},
                {name: 'friend 2'},
                {name: 'friend 3'},
            ]
        }
    },
    _callRender() {
    },
    subscriber(observer: () => void) {
        this._callRender = observer
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionTypes) {
        this._state.profileData = profileReducer( this._state.profileData, action)
        this._state.dialogData = dialogReducer(this._state.dialogData, action)
        this._callRender()

        }
    }
