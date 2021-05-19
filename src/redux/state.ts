import {v1} from "uuid";
import {renderTree} from "../render";

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

export const state: RootStateType = {
    dialogData: {
        usersInfo: [
            {id: v1(), name: 'Ilya'},
            {id: v1(), name: 'Alexander'},
            {id: v1(), name: 'Svetlana'},
            {id: v1(), name: 'Nadezhda'},
            {id: v1(), name: 'Igor'}
        ],
        usersMessages:  [
            {id: v1(), message: 'Hello'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'Ok'},
            {id: v1(), message: 'Yes'},
            {id: v1(), message: 'No'},
        ],
        newDialogMessage: 'Quokka'
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
}

export const addProfilePost = () =>{
    const newPost: PostsType = {
            id: v1(),
            message: state.profileData.newProfileMessageText,
            likesCount : 7
        }
    state.profileData.posts.push(newPost)
    state.profileData.newProfileMessageText = ''
    renderTree()
}

export const changeProfilePost = (newText: string) =>{
    state.profileData.newProfileMessageText = newText;
    renderTree();
}

export const addDialogMessage = () =>{
    const newMessage: UsersMessagesType = {
        id: v1(),
        message: state.dialogData.newDialogMessage
    }
    state.dialogData.usersMessages.push(newMessage);
    state.dialogData.newDialogMessage = '';
    renderTree();
}

export const changeDialogMessage = (newMessage: string) =>{
    state.dialogData.newDialogMessage = newMessage;
}