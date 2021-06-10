import {ChangeEvent, createRef, FC} from "react";
import s from './Dialogs.module.css'
import {UserDialog} from "./UserDialog/UserDialog";
import {UserMessage} from "./UserMessage/UserMessage";
import {ActionTypes, DialogDataType} from "../../redux/state";
import {addDialogMessageActionCreator, changeDialogMessageActionCreator} from "../../redux/dialog-reducer";

type DialogsTypeProps = {
    dialogData: DialogDataType;
    dispatch: (action: ActionTypes) => void;
}

export const Dialogs: FC<DialogsTypeProps> = ({dialogData, dispatch}) => {

    const textAreaRef = createRef<HTMLTextAreaElement>();

    const onAddNewMessage = () => dispatch(addDialogMessageActionCreator())
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeDialogMessageActionCreator(e.currentTarget.value))
    }

    const users = dialogData.usersInfo.map(data => <UserDialog user={data} key={data.id}/>)
    const userMessage = dialogData.usersMessages.map(data => <UserMessage userMessage={data} key={data.id}/>)
    return (
        <div>
            <div className={s.item}>
                <div className={s.users}>
                    {users}
                </div>
                <div className={s.usersMessages}>
                    {userMessage}
                </div>
            </div>
            <div className={s.itemRepeat}>
                <div>
                    <textarea placeholder='Repeat' ref={textAreaRef} value={dialogData.newDialogMessage} onChange={onChangeMessage}/>
                </div>
                <div>
                    <button onClick={onAddNewMessage}>Repeat</button>
                </div>
            </div>
        </div>
    )
}
