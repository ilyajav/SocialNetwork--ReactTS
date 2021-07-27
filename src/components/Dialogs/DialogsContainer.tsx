import {
    addDialogMessage,
    changeDialogMessage,
    DialogDataType
} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import React from "react";

type mapStateToPropsType = {
    dialogData: DialogDataType,
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType =>{
   return{
       dialogData: state.dialogData,
   }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {addDialogMessage, changeDialogMessage}),
    WithAuthRedirect,
)(Dialogs)
