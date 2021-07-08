import {
    addPost,
    changeProfilePost,
    ProfileDataType
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type mapStateToPropsType = {
    postsData: ProfileDataType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        postsData: state.profileData,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost, changeProfilePost})(MyPosts)
