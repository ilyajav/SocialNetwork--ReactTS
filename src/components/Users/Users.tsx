import {FC} from 'react'
import {UsersDataType} from "../../redux/users-reducer";
import s from './Users.module.css'

type UsersPropsType = {
    usersData: UsersDataType;
    follow: (userID: string) => void;
    unFollow: (userID: string) => void;
}

export const Users: FC<UsersPropsType> = ({usersData, follow, unFollow}) =>{
    return(
        <div>
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
                                <img className={s.ava} alt={'userPhoto'} src={u.photo}/>
                            </div>
                            <div>
                                {u.followed ? <button onClick={unFollowUser}>Unfollow</button>: <button onClick={followUser}>Follow</button>}
                            </div>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </div>
                        )
                    })
                }
        </div>
    )
}