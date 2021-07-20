import React, {FC} from 'react'
import {UsersDataType} from "../../redux/users-reducer";
import style from './Users.module.css'
import userPhoto from '../../assets/userPhoto.jpg'
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    usersData: UsersDataType;
    follow: (userID: number) => void;
    unFollow: (userID: number) => void;
    onChangeCurrentPage: (pageNumber: number) => void;
}

export const Users: FC<UsersPropsType> = ({usersData, follow, unFollow, onChangeCurrentPage}) => {

    const pagesCount = Math.ceil(usersData.totalUsersCount / usersData.pageSize)
    const pages = []
    const currentPage = usersData.currentPage

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={style.item}>
        <div>
            {
                pages.map(pg => {
                    return <span key={pg} className={currentPage === pg ? style.selectedPage : style.page}
                                 onClick={() => onChangeCurrentPage(pg)}
                    >{pg}</span>
                })
            }
        </div>
        {
            usersData.users.map(u => {
                const followUser = () => {
                    follow(u.id)
                }
                const unFollowUser = () => {
                    unFollow(u.id)
                }
                return (
                    <div key={u.id}>
                        <div>
                            <NavLink to={'profile/' + u.id}>
                                <img className={style.ava} alt={'userPhoto'}
                                     src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed ?
                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '6a2da8d7-69c4-4b3d-9e51-9141873328b1',
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    unFollowUser()
                                                }
                                            })
                                    }}>Unfollow</button>
                                    :
                                    <button onClick={() =>{
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '6a2da8d7-69c4-4b3d-9e51-9141873328b1',
                                                }
                                            }
                                        )
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    followUser()
                                                }
                                            })
                                    }
                                    }>Follow</button>
                            }
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
