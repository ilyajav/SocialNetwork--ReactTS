import {FC} from 'react'
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

export const Users: FC<UsersPropsType> = ({usersData, follow, unFollow, setUsers}) =>{
    if(usersData.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
          setUsers(response.data.items)
        })
    }
    return(
        <div className={s.item}>
                {
                    usersData.users.map(u =>  {
                        const followUser = () => {
                            follow(u.id)
                        }
                        const unFollowUser = () => {
                            unFollow(u.id)
                        }
                        return(
                        <div key={u.id}>
                            <div>
                                <img className={s.ava} alt={'userPhoto'} src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                            </div>
                            <div>
                                {u.followed ? <button onClick={unFollowUser}>Unfollow</button>: <button onClick={followUser}>Follow</button>}
                            </div>
                            <div>
                                {u.name}
                            </div>

                        </div>
                        )
                    })
                }
        </div>
    )
}