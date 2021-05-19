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
import {RootStateType} from "./redux/state";


type AppTypeProps = {
    appState: RootStateType;
    addProfilePost: () => void;
    changeProfilePost: (newTest: string) => void;
    addDialogMessage: () => void;
    changeDialogMessage: (newMessage: string) => void;
}

export const App: FC<AppTypeProps> = ({appState, addProfilePost, changeProfilePost, addDialogMessage, changeDialogMessage}) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friendsData={appState.sidebarData.friends}/>
            <div className='app-wrapper-content'>
                <Route path={'/profile'} render={() => <Profile postsData={appState.profileData}
                                                                addPost={addProfilePost}
                                                                changePost={changeProfilePost}
                />}/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogData={appState.dialogData}
                                                                addMessage={addDialogMessage}
                                                                changeMessage={changeDialogMessage}

                />}/>
                <Route path={'/news'} render={() => <News />} />
                <Route path={'/music'} render={() => <Music />} />
                <Route path={'/settings'} render={() => <Settings />} />
            </div>
        </div>
    );
}


