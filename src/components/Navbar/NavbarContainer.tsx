import {FC} from "react";
import {StoreContext} from "../../StoreContext";
import {StoreType} from "../../redux/redux-store";
import {Navbar} from "./Navbar";


type NavbarPropsType = {}

export const NavbarContainer: FC<NavbarPropsType> = () => {

    return <StoreContext.Consumer>
        { (store: StoreType) => {
            const state = store.getState().sidebarData
            return (
                <Navbar friendsData={state.friends} />
            )
        }
        }
    </StoreContext.Consumer>

}