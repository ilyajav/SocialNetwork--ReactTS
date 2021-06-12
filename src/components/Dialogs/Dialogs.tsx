import {ChangeEvent, createRef, FC} from "react";
import s from './Dialogs.module.css'
import {UserDialog} from "./UserDialog/UserDialog";
import {UserMessage} from "./UserMessage/UserMessage";
import {UsersDataType, UsersMessagesType} from "../../redux/dialog-reducer";

type DialogsTypeProps = {
    addNewMessage: () => void;
    changeMessage: (text: string) => void;
    usersInfo: UsersDataType[];
    usersMessages: UsersMessagesType[];
    newDialogMessage: string
}

export const Dialogs: FC<DialogsTypeProps> = ({
                                                  addNewMessage,
                                                  changeMessage,
                                                  usersMessages,
                                                  usersInfo,
                                                  newDialogMessage
                                              }) => {

    const textAreaRef = createRef<HTMLTextAreaElement>();

    const onAddNewMessage = () => addNewMessage()
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeMessage(e.currentTarget.value)
    }

    const users = usersInfo.map(data => <UserDialog user={data} key={data.id}/>)
    const userMessage = usersMessages.map(data => <UserMessage userMessage={data} key={data.id}/>)

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
                    <textarea placeholder='Repeat' ref={textAreaRef} value={newDialogMessage}
                              onChange={onChangeMessage}/>
                </div>
                <div>
                    <button onClick={onAddNewMessage}>Repeat</button>
                </div>
            </div>
        </div>
    )
}
