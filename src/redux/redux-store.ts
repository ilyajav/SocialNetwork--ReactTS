import {createStore, combineReducers} from 'redux'
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";


const rootReducer = combineReducers({
    profileData: profileReducer,
    dialogData: dialogReducer,
    sidebarData: sidebarReducer
})


export const store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>

