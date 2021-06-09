import {v1} from "uuid";

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

export type FriendsType ={
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
    dispatch: (action: any) => void;
}

type AddProfilePostType = {
    type: 'ADD-PROFILE-POST';
}

type ChangeProfilePostType = {
    type: 'CHANGE-PROFILE-POST';
    newText: string;
}

type AddDialogMessageType = {
    type: 'ADD-DIALOG-MESSAGE';
}

type ChangeDialogMessageType = {
    type: 'CHANGE-DIALOG-MESSAGE';
    newMessage: string;
}

export type ActionTypes = AddProfilePostType | ChangeProfilePostType | ChangeDialogMessageType | AddDialogMessageType

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

    _callRender(){},
    subscriber(observer: () => void){
        this._callRender = observer
    },
    getState(){
        return this._state
    },
    dispatch(action: ActionTypes){
        if(action.type === 'ADD-PROFILE-POST'){
            const newPost: PostsType = {
                id: v1(),
                message: this._state.profileData.newProfileMessageText,
                likesCount: 7,
            }
            this._state.profileData.posts.push(newPost)
            this._state.profileData.newProfileMessageText = ''
            this._callRender();
        }else if(action.type === 'CHANGE-PROFILE-POST'){
            this._state.profileData.newProfileMessageText = action.newText;
            this._callRender()
        }else if(action.type === 'ADD-DIALOG-MESSAGE'){
            const newMessage: UsersMessagesType = {
                id: v1(),
                message: this._state.dialogData.newDialogMessage
            }
            this._state.dialogData.usersMessages.push(newMessage);
            this._state.dialogData.newDialogMessage = '';
            this._callRender();
        }else if(action.type === 'CHANGE-DIALOG-MESSAGE'){
            this._state.dialogData.newDialogMessage = action.newMessage;
            this._callRender();
        }
    }
}
