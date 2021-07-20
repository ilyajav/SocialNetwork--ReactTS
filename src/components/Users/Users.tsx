import React, {FC} from 'react'
import {UsersDataType} from "../../redux/users-reducer";
import style from './Users.module.css'
import userPhoto from '../../assets/userPhoto.jpg'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    usersData: UsersDataType;
    follow: (userID: number) => void;
    unFollow: (userID: number) => void;
    onChangeCurrentPage: (pageNumber: number) => void;
    toggleIsFollowingProgress: (isFollowingProgress: boolean, usersID: number) => void;
}

export const Users: FC<UsersPropsType> = ({
                                              usersData,
                                              follow,
                                              unFollow,
                                              onChangeCurrentPage,
                                              toggleIsFollowingProgress
                                          }) => {

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
                                    <button disabled={usersData.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        toggleIsFollowingProgress(true, u.id)
                                        usersAPI.unFollowUser(u.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    unFollowUser()
                                                }
                                                toggleIsFollowingProgress(false,  u.id)
                                            })
                                    }}>Unfollow</button>
                                    :
                                    <button disabled={usersData.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        toggleIsFollowingProgress(true,  u.id)
                                        usersAPI.followUser(u.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    followUser()
                                                }
                                                toggleIsFollowingProgress(false,  u.id)
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
