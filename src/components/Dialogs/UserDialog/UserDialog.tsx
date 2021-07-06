import {FC} from "react";
import {NavLink} from "react-router-dom";
import {DialogUsersDataType} from "../../../redux/dialog-reducer";


type UserDialogTypeProps = {
    user: DialogUsersDataType
}

export const UserDialog: FC<UserDialogTypeProps> = ({user}) => {
    const path = "/dialogs/" + user.id
    return (
        <div>
            <NavLink to={path}> {user.name} </NavLink>
        </div>
    )
}
