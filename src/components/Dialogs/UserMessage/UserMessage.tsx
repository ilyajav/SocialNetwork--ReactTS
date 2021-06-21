import {FC} from "react";
import {DialogUsersMessagesType} from "../../../redux/dialog-reducer";


type UserMessageTypeProps = {
    userMessage: DialogUsersMessagesType;
}


export const UserMessage: FC<UserMessageTypeProps> = ({userMessage}) => {
    return (
        <div>
            <div>
                {userMessage.message}
            </div>
        </div>
    )
}