import {FC} from "react";
import {UsersMessagesType} from "../../../redux/dialog-reducer";


type UserMessageTypeProps = {
    userMessage: UsersMessagesType;
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