import {v1} from "uuid";

let render = () =>{
    console.log('render')
}

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

type RootStateType = {
    dialogData: DialogDataType;
    profileData: ProfileDataType;
    sidebarData: SidebarDataType;
}

export type StoreType = {
    state: RootStateType
    addProfilePost: () => void;
    changeProfilePost: (newText: string) => void;
    addDialogMessage: () => void;
    changeDialogMessage: (newMessage: string) => void;
    render: () => void;
    subscriber: (observer: () => void) => void;
}

export const store: StoreType = {
    state: {
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
    addProfilePost (){
        const newPost: PostsType = {
            id: v1(),
            message: this.state.profileData.newProfileMessageText,
            likesCount: 7,
        }
        this.state.profileData.posts.push(newPost)
        this.state.profileData.newProfileMessageText = ''
        render();
    },
    changeProfilePost(newText: string){
        debugger
        this.state.profileData.newProfileMessageText = newText;
        render()
    },
    addDialogMessage(){
        const newMessage: UsersMessagesType = {
            id: v1(),
            message: this.state.dialogData.newDialogMessage
        }
        this.state.dialogData.usersMessages.push(newMessage);
        this.state.dialogData.newDialogMessage = '';
        render();
    },
    changeDialogMessage(newMessage: string){
        this.state.dialogData.newDialogMessage = newMessage;
        render();
    },
    render(){
        console.log('render')
    },
    subscriber(observer: () => void){
        render = observer
    }
}
