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

type ProfileDatType = {
    posts: PostsType[]
}

type DialogDataType = {
    usersInfo: UsersDataType[];
    usersMessages: UsersMessagesType[];
}

export type FriendsType ={
    name: string;
}

type SidebarDataType = {
    friends: FriendsType[];
}

export type RootStateType = {
    dialogData: DialogDataType;
    profileData: ProfileDatType;
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
        ]
    },
    profileData: {
        posts: [
            {id: v1(), message: 'How are you?', likesCount: 5},
            {id: v1(), message: 'Good day', likesCount: 10},
            {id: v1(), message: 'New York', likesCount: 6}
        ]
    },
    sidebarData: {
        friends: [
            {name: 'friend 1'},
            {name: 'friend 2'},
            {name: 'friend 3'},
        ]
    }
}