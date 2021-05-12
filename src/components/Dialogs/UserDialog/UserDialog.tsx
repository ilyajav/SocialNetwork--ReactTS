import {FC} from "react";
import {NavLink} from "react-router-dom";
import {UsersDataType} from "../../../redux/state";


type UserDialogTypeProps = {
    user: UsersDataType;
}

export const UserDialog: FC<UserDialogTypeProps> = ({user}) => {
    const path = "/dialogs/" + user.id
    return (
        <div>
            <NavLink to={path}> {user.name} </NavLink>
        </div>
    )
}