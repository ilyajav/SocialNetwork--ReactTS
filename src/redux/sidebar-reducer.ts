export type SidebarDataType = {
    friends: FriendsDataType[];
}

export type FriendsDataType = {
    name: string;
}


const initialState = {
    friends: [
        {name: 'friend 1'},
        {name: 'friend 2'},
        {name: 'friend 3'},
    ]
}

export const sidebarReducer = (state: SidebarDataType = initialState, action: any) => {

    return state
}