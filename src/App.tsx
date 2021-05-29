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
import {StoreType} from "./redux/state";


type AppTypeProps = {
    appStore: StoreType;
}

export const App: FC<AppTypeProps> = ({appStore}) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friendsData={appStore.state.sidebarData.friends}/>
            <div className='app-wrapper-content'>
                <Route path={'/profile'} render={() => <Profile postsData={appStore.state.profileData}
                                                                addPost={appStore.addProfilePost.bind(appStore)}
                                                                changePost={appStore.changeProfilePost.bind(appStore)}
                />}/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogData={appStore.state.dialogData}
                                                                addMessage={appStore.addDialogMessage.bind(appStore)}
                                                                changeMessage={appStore.changeDialogMessage.bind(appStore)}

                />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}


