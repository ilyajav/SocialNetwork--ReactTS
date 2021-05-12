import {FC} from "react";
import s from './Dialogs.module.css'
import {UserDialog} from "./UserDialog/UserDialog";
import {UserMessage} from "./UserMessage/UserMessage";
import {UsersDataType, UsersMessagesType} from "../../redux/state";



type DialogsTypeProps = {
    usersInfo: UsersDataType[];
    usersMessages: UsersMessagesType[];
}

export const Dialogs: FC<DialogsTypeProps> = ({usersMessages, usersInfo}) => {
    const users = usersInfo.map( data => <UserDialog user={data} /> )
    const userMessage = usersMessages.map(data => <UserMessage userMessage={data} /> )
    return (
        <div className={s.item}>
            <div className={s.users}>
              {users}
            </div>
            <div className={s.usersMessages}>
                {userMessage}
            </div>
        </div>
    )
}
