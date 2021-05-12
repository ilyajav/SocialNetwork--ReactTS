import {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";


type AppTypeProps = {
    appState: RootStateType
}

export const App: FC<AppTypeProps> = ({appState}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friendsData={appState.sidebarData.friends} />
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile postsData={appState.profileData.posts} />}/>
                    <Route path={'/dialogs'} render={() => <Dialogs
                        usersInfo={appState.dialogData.usersInfo}
                        usersMessages={appState.dialogData.usersMessages}/>} />
                    <Route path={'/news'} render={() => <News/>} />
                    <Route path={'/music'} render={() => <Music/>} />
                    <Route path={'/settings'} render={() => <Settings/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}


