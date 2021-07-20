import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleIsFetching,
    unFollow,
    UsersDataType,
    usersReducer
} from "./users-reducer";


let usersData: UsersDataType

beforeEach(() =>{
    usersData = {
        users: [
            {name: 'Vlad', id: 1, photos: {small: 'sm', large: '23px'}, followed: false, status: 'ok'},
            {name: 'Elena', id: 2, photos: {small: 'sm', large: '25px'}, followed: true, status: 'ok'},
        ],
        pageSize: 4,
        totalUsersCount: 1,
        currentPage: 2,
        isFetching: false,
        followingInProgress: []
    }
})

test('User subscription must become active', () =>{

    const action = follow(1)
    const endState = usersReducer(usersData, action)

    expect(endState.users[0].followed).toBeTruthy()
})

test('User subscription must become inactive', () =>{

    const action = unFollow(2)
    const endState = usersReducer(usersData, action)

    expect(endState.users[1].followed).toBeFalsy()
})

test('User must be added', () =>{

    const userData: UsersDataType = {
        users: [
            {
                name: 'Andrey',
                id: 1,
                photos: {small: 'sm', large: '29px'},
                followed: true,
                status: 'ok',
            },
            {
                name: 'Polina',
                id: 2,
                photos: {small: 'sm', large: '29px'},
                followed: false,
                status: 'ok',
            }
        ],
        pageSize: 4,
        totalUsersCount: 1,
        currentPage: 2,
        isFetching: false,
        followingInProgress: [],
    }


    const action = setUsers(userData.users)
    const endState = usersReducer(userData, action)

    expect(endState.users[0].name).toBe('Andrey')
    expect(endState.users[1].name).toBe('Polina')
    expect(endState.users[0].followed).toBeTruthy()
    expect(endState.users[1].followed).toBeFalsy()
    expect(endState.users[0].photos.large).toBe('29px')
})

test('current page should be changed', ()=>{

    const action = setCurrentPage(3)
    const endState = usersReducer(usersData, action)

    expect(endState.currentPage).toBe(3)
})

test('user total count should be changed', ()=>{

    const action = setUsersTotalCount(50)
    const endState = usersReducer(usersData, action)

    expect(endState.totalUsersCount).toBe(50)
})

test('preloader should be on', ()=>{

    const action = toggleIsFetching(true)
    const endState = usersReducer(usersData, action)

    expect(endState.isFetching).toBeTruthy()
})
