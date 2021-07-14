import {authReducer, setUserData, UserAuthData} from "./auth-reducer";

let authData: UserAuthData

beforeEach(()=>{
    authData = {
        id: 1,
        email: 'user@mail.com',
        login: 'user1',
        isAuth: false,
    }
})

test('auth data should be changed', ()=>{

     const action = setUserData(2, 'newUser@mail.com', 'user2')
     const endState = authReducer(authData, action)
     endState.isAuth = true

    expect(endState.id).toBe(2)
    expect(endState.email).toBe('newUser@mail.com')
    expect(endState.login).toBe('user2')
    expect(endState.isAuth).toBeTruthy()
})
