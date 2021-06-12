import {FC} from "react";
import {FriendsDataType} from "../../../redux/sidebar-reducer";

type FriendsListPropsType = {
    friendName: FriendsDataType
}

export const FriendsList: FC<FriendsListPropsType> = ({friendName}) => {
    return (
        <div>
            {friendName.name}
            <img alt='friendPic'
                 src='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'/>
        </div>
    )
}