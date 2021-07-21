import {
    addDialogMessage,
    changeDialogMessage,
    DialogDataType
} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store"

type mapStateToPropsType = {
    dialogData: DialogDataType,
    isAuth: boolean,
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType =>{
   return{
      dialogData: state.dialogData,
       isAuth: state.authData.isAuth,
   }
}

export const DialogsContainer = connect(mapStateToProps, {addDialogMessage, changeDialogMessage})(Dialogs)
