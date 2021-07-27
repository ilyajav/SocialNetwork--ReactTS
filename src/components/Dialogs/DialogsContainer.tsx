import {
    addDialogMessage,
    changeDialogMessage,
    DialogDataType
} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapStateToPropsType = {
    dialogData: DialogDataType,
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType =>{
   return{
       dialogData: state.dialogData,
   }
}

export const DialogsContainer = WithAuthRedirect(connect
(mapStateToProps, {addDialogMessage, changeDialogMessage})(Dialogs))
