import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type UsersData = {
    id: string
    name: string
}

type UsersMessages = {
    id: string
    message: string
}

type UserDialogTypeProps = {
    user: UsersData
}

type UserMessageTypeProps = {
    userMessage: UsersMessages
}

const usersInfo: Array<UsersData> = [
    {id: '1', name: 'Ilya'},
    {id: '2', name: 'Alexander'},
    {id: '3', name: 'Svetlana'},
    {id: '4', name: 'Nadezhda'},
    {id: '5', name: 'Igor'}
]

const usersMessages: Array<UsersMessages> = [
    {id: '1', message: 'Hello'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'Ok'},
]

const UserDialog: React.FC<UserDialogTypeProps> = (props) => {
    const path = "/dialogs/" + props.user.id
    return (
        <div>
            <NavLink to={path}> {props.user.name} </NavLink>
        </div>
    )
}

const UserMessage: React.FC<UserMessageTypeProps> = (props) => {
    return (
        <div>
            <div>
                {props.userMessage.message}
            </div>
        </div>
    )
}

export const Dialogs = () => {
    let users = usersInfo.map( data => <UserDialog user={data} /> )
    let userMessage = usersMessages.map(data => <UserMessage userMessage={data} /> )
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
