import {
    addDialogMessage,
    changeDialogMessage,
    DialogDataType
} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store"

type mapStateToPropsType = {
    dialogData: DialogDataType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType =>{
   return{
      dialogData: state.dialogData
   }
}

export const DialogsContainer = connect(mapStateToProps, {addDialogMessage, changeDialogMessage})(Dialogs)
