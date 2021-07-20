import {
    addPost,
    changeProfilePost,
    ProfileDataType,
    profileReducer,
    ServerProfileType,
    userProfile
} from "./profile-reducer";
import {v1} from "uuid";


let profileState: ProfileDataType

beforeEach(() =>{
    profileState = {
        posts: [
            {id: v1(), message: 'How are you?', likesCount: 5},
            {id: v1(), message: 'Good day', likesCount: 10},
            {id: v1(), message: 'New York', likesCount: 6}
        ],
        newProfileMessageText: '',
        profile:  <ServerProfileType> {},
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

test('user profile data should be changed', () =>{

    const action = userProfile({
        aboutMe: 'Cat',
        userid: 5,
        lookingForAJob: true,
        lookingForAJobDescription: 'I am developer',
        fullName: 'Murzik Murzik',
        contacts: {
            github: 'github',
            vk: 'vk',
            facebook: 'facebook',
            instagram: 'instagram',
            twitter: 'twitter',
            website: 'site.com',
            youtube: 'youtube',
            mainLink: '',
        },
        photos: {
            small: '',
            large: '',
        },

    })
    const endState = profileReducer(profileState, action)

    expect(endState.profile.aboutMe).toBe('Cat')
    expect(endState.profile.userid).toBe(5)
    expect(endState.profile.fullName).toBe('Murzik Murzik')
    expect(endState.profile.contacts.github).toBe('github')
    expect(endState.profile.photos.large).toBeFalsy()
})
