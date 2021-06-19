export type SidebarDataType = typeof initialState

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

export const sidebarReducer = (state: SidebarDataType = initialState): SidebarDataType  => {
    return state
}
