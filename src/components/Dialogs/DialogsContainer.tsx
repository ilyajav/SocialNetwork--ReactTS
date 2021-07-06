import {
    addDialogMessage,
    changeDialogMessage,
    DialogDataType
} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store"

type mapStateToPropsType = {
    dialogData: DialogDataType
}

type mapDispatchToPropsType = {
    addNewMessage: () => void;
    changeMessage: (text: string) => void;
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType =>{
   return{
      dialogData: state.dialogData
   }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType =>{
      return{
         addNewMessage: () => dispatch(addDialogMessage()),
         changeMessage: (text: string) => dispatch(changeDialogMessage(text))
      }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
