import s from './FriendList.module.css'
import {FC} from "react";
import {FriendsType} from "../../../redux/state";

type FriendsListPropsType = {
    friendName: FriendsType
}

export const FriendsList: FC<FriendsListPropsType> = ({friendName}) =>{
     return(
         <div>
             {friendName.name}
             <img alt='friendPic' src='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'/>
         </div>
     )
}