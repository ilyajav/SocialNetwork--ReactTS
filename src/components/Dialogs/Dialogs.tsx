import {ChangeEvent, createRef, FC} from "react";
import s from './Dialogs.module.css'
import {UserDialog} from "./UserDialog/UserDialog";
import {UserMessage} from "./UserMessage/UserMessage";
import {ActionTypes, DialogDataType} from "../../redux/state";


type DialogsTypeProps = {
    dialogData: DialogDataType;
    dispatch: (action: ActionTypes) => void;
}

export const Dialogs: FC<DialogsTypeProps> = ({dialogData, dispatch}) => {

    const textAreaRef = createRef<HTMLTextAreaElement>();

    const onAddNewMessage = () => dispatch({type: "ADD-DIALOG-MESSAGE"})
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({type: "CHANGE-DIALOG-MESSAGE", newMessage: e.currentTarget.value})
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
                    <textarea ref={textAreaRef} value={dialogData.newDialogMessage} onChange={onChangeMessage}/>
                </div>
                <div>
                    <button onClick={onAddNewMessage}> Repeat</button>
                </div>
            </div>
        </div>
    )
}
