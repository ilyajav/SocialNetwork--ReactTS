import {ChangeEvent, createRef, FC} from "react";
import s from './Dialogs.module.css'
import {UserDialog} from "./UserDialog/UserDialog";
import {UserMessage} from "./UserMessage/UserMessage";
import {DialogDataType} from "../../redux/dialog-reducer";

type DialogsTypeProps = {
    addDialogMessage: () => void;
    changeDialogMessage: (text: string) => void;
    dialogData: DialogDataType
}

export const Dialogs: FC<DialogsTypeProps> = ({
                                                  addDialogMessage,
                                                  changeDialogMessage,
                                                  dialogData
                                              }) => {

    const textAreaRef = createRef<HTMLTextAreaElement>();

    const onAddNewMessage = () => addDialogMessage()
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeDialogMessage(e.currentTarget.value)
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
                    <textarea placeholder='Repeat' ref={textAreaRef} value={dialogData.newDialogMessage}
                              onChange={onChangeMessage}/>
                </div>
                <div>
                    <button onClick={onAddNewMessage}>Repeat</button>
                </div>
            </div>
        </div>
    )
}
