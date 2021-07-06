import {addPost, changeProfilePost, ProfileDataType, profileReducer} from "./profile-reducer";
import {v1} from "uuid";


let profileState: ProfileDataType

beforeEach(() =>{
    profileState = {
        posts: [
            {id: v1(), message: 'How are you?', likesCount: 5},
            {id: v1(), message: 'Good day', likesCount: 10},
            {id: v1(), message: 'New York', likesCount: 6}
        ],
        newProfileMessageText: ''
    }
})


test('new post should be added', () =>{

    const action = addPost()
    const endState = profileReducer(profileState, action)

    expect(endState.posts[3]).toBeDefined()
    expect(endState.posts.length).toBe(4)

})

test('new post title should be changed', () =>{

    const action = changeProfilePost('new title')
    const endState = profileReducer(profileState, action)

    expect(endState.newProfileMessageText).toBe('new title')
})
