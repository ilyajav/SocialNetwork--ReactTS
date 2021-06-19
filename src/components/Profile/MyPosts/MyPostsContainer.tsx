import {
    addPostActionCreator,
    changeProfilePostActionCreator,
    ProfileDataType
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    postsData: ProfileDataType
}

type mapDispatchToPropsType = {
    addPost: () => void;
    changePostText: (text: string) => void;

}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        postsData: state.profileData
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType =>{
    return {
        addPost: () => dispatch(addPostActionCreator()),
        changePostText: (text: string) => dispatch(changeProfilePostActionCreator(text))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
