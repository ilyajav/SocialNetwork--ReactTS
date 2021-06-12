import {FC} from "react";
import s from './Post.module.css'

type PostPropsType = {
    postInfo: any;
}

export const Post: FC<PostPropsType> = ({postInfo}) => {
    return (
        <div className={s.item}>
            <div>
                <img alt='mainPicture'
                     src='https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png'/>
                {postInfo.message}
            </div>
            <div>
                <span>like {postInfo.likesCount}</span>
            </div>
        </div>
    )
}
