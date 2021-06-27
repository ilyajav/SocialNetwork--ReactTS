import React from 'react'
import {UsersDataType, UserType} from "../../redux/users-reducer";
import s from './Users.module.css'
import axios from 'axios'
import userPhoto from '../../assets/userPhoto.jpg'

type UsersPropsType = {
    usersData: UsersDataType;
    follow: (userID: number) => void;
    unFollow: (userID: number) => void;
    setUsers: (users: UserType[]) => void;
}

export class Users extends React.Component<UsersPropsType>{
    componentDidMount() {
        if (this.props.usersData.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }
    render() {
       return <div className={s.item}>
            {
                this.props.usersData.users.map(u => {
                    const followUser = () => {
                        this.props.follow(u.id)
                    }
                    const unFollowUser = () => {
                        this.props.unFollow(u.id)
                    }
                    return (
                        <div key={u.id}>
                            <div>
                                <img className={s.ava} alt={'userPhoto'}
                                     src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                            </div>
                            <div>
                                {u.followed ? <button onClick={unFollowUser}>Unfollow</button> :
                                    <button onClick={followUser}>Follow</button>}
                            </div>
                            <div>
                                {u.name}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    }
}
