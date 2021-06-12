import {FC} from "react";
import {addDialogMessageActionCreator, changeDialogMessageActionCreator} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";
import {StoreType} from "../../redux/redux-store";

type DialogsTypeProps = {}

export const DialogsContainer: FC<DialogsTypeProps> = () => {

    return <StoreContext.Consumer>
        {(store: StoreType) => {
            const addNewMessage = () => store.dispatch(addDialogMessageActionCreator())
            const changeMessage = (text: string) => {
                store.dispatch(changeDialogMessageActionCreator(text))
            }
            const state = store.getState().dialogData
            return <Dialogs addNewMessage={addNewMessage}
                            changeMessage={changeMessage}
                            usersMessages={state.usersMessages}
                            usersInfo={state.usersInfo}
                            newDialogMessage={state.newDialogMessage}
            />
        }
        }
    </StoreContext.Consumer>


}