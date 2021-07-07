import React from 'react'
import {UsersDataType, UserType} from "../../redux/users-reducer";
import style from './Users.module.css'
import axios from 'axios'
import userPhoto from '../../assets/userPhoto.jpg'

type UsersPropsType = {
    usersData: UsersDataType;
    follow: (userID: number) => void;
    unFollow: (userID: number) => void;
    setUsers: (users: UserType[]) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalUsersCount: (totalUsersCount: number) => void;
}

export class Users extends React.Component<UsersPropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersData.currentPage}&count=${this.props.usersData.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onChangeCurrentPage = (pageNumber: number) =>{
        debugger
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersData.pageSize}`)
            .then(response => {this.props.setUsers(response.data.items)})
    }

    render() {

        const pagesCount = Math.ceil(this.props.usersData.totalUsersCount / this.props.usersData.pageSize)
        const pages = []
        const currentPage = this.props.usersData.currentPage

        for(let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }

       return <div className={style.item}>
           <div>
               {
                   pages.map(pg => {
                       return <span key={pg} className={currentPage === pg ? style.selectedPage : style.page}
                            onClick={() => {
                                debugger
                                this.onChangeCurrentPage(pg)
                            }}
                       >{pg}</span>
                   })
               }
           </div>
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
}
