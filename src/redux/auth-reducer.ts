
enum ACTION_TYPES {
    SET_USER_DATA = 'SET_USER_DATA',
}

export type UserAuthData = {
    id: null | number,
    email: string,
    login: string,
    isAuth: boolean,
}

const initialState: UserAuthData = {
    id: null,
    email: '',
    login: '',
    isAuth: false
}

type ActionAuthTypes = ReturnType<typeof setUserData>

export const authReducer = (state: UserAuthData = initialState, action: ActionAuthTypes): UserAuthData =>{
          switch (action.type){
              case ACTION_TYPES.SET_USER_DATA:
                  return {
                      ...state,
                      ...action.data,
                      isAuth: true,
                  }
              default:
                  return state
          }
}

export const setUserData = (id: number, email: string, login: string) =>{
    return{
        type: ACTION_TYPES.SET_USER_DATA,
        data: {id, email, login},
    }
}
