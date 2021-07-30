import React, {ChangeEvent, createRef, FC} from "react";
import style from './Dialogs.module.css'
import {UserDialog} from "./UserDialog/UserDialog";
import {UserMessage} from "./UserMessage/UserMessage";
import {DialogDataType} from "../../redux/dialog-reducer";

type DialogsTypeProps = {
    addDialogMessage: () => void;
    changeDialogMessage: (text: string) => void;
    dialogData: DialogDataType;
}

export const Dialogs: FC<DialogsTypeProps> = ({
                                                  addDialogMessage,
                                                  changeDialogMessage,
                                                  dialogData,
                                              }) => {


    const onAddNewMessage = () => addDialogMessage()
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeDialogMessage(e.currentTarget.value)
    }


    const users = dialogData.usersInfo.map(data => <UserDialog user={data} key={data.id}/>)
    const userMessage = dialogData.usersMessages.map(data => <UserMessage userMessage={data} key={data.id}/>)


    return (
        <div>
            <div className={style.item}>
                <div className={style.users}>
                    {users}
                </div>
                <div className={style.usersMessages}>
                    {userMessage}
                </div>
            </div>
            <div className={style.itemRepeat}>
                <div>
                    <textarea placeholder='Repeat' value={dialogData.newDialogMessage}
                              onChange={onChangeMessage}/>
                </div>
                <div>
                    <button onClick={onAddNewMessage}>Repeat</button>
                </div>
            </div>
        </div>
    )
}
