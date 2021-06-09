import {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionTypes, RootStateType} from "./redux/state";


type AppTypeProps = {
    state: RootStateType;
    dispatch: (action: ActionTypes) => void;
}

export const App: FC<AppTypeProps> = ({state, dispatch}) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friendsData={state.sidebarData.friends}/>
            <div className='app-wrapper-content'>
                <Route path={'/profile'} render={() => <Profile postsData={state.profileData}
                                                                dispatch={dispatch}


                />}/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogData={state.dialogData}
                                                                dispatch={dispatch}


                />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}


