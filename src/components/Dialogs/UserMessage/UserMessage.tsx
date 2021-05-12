import {FC} from "react";
import {UsersMessagesType} from "../../../redux/state";



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