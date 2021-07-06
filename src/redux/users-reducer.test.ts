import {follow, setUsers, unFollow, UsersDataType, usersReducer} from "./users-reducer";


let usersData: UsersDataType

beforeEach(() =>{
    usersData = {
        users: [
            {name: 'Vlad', id: 1, photos: {small: 'sm', large: '23px'}, followed: false, status: 'ok'},
            {name: 'Elena', id: 2, photos: {small: 'sm', large: '25px'}, followed: true, status: 'ok'},
        ]
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
        ]
    }


    const action = setUsers(userData.users)
    const endState = usersReducer(userData, action)

    expect(endState.users[0].name).toBe('Andrey')
    expect(endState.users[1].name).toBe('Polina')
    expect(endState.users[0].followed).toBeTruthy()
    expect(endState.users[1].followed).toBeFalsy()
    expect(endState.users[0].photos.large).toBe('29px')
})
