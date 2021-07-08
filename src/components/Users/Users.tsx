import React, {FC} from 'react'
import {UsersDataType} from "../../redux/users-reducer";
import style from './Users.module.css'
import userPhoto from '../../assets/userPhoto.jpg'

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
                            <img className={style.ava} alt={'userPhoto'}
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
