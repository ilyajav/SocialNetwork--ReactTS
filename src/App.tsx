import './App.css';
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


export const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <NavbarContainer />
            <div className='app-wrapper-content'>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                <Route path={'/users'} render={() => <UsersContainer />}/>
                <Route path={'/news'} render={() => <News />}/>
                <Route path={'/music'} render={() => <Music />}/>
                <Route path={'/settings'} render={() => <Settings />}/>
                <Route path={'/login'} render={() => <Login />}/>
            </div>
        </div>
    );
}
