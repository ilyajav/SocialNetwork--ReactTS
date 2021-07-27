import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";

type mapStateToProps = {
    isAuth: boolean;
}

type RedirectComponentType = {
    isAuth: boolean;
}

const mapStateToProps = (state: AppStateType): mapStateToProps =>{

     return {
         isAuth: state.authData.isAuth,
     }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>){
    const RedirectComponent = (props: RedirectComponentType) =>{

        const {isAuth, ...restProps} = props

        if(!isAuth) return <Redirect to={'/login'} />

        return (
            <Component {...restProps as T} />
        )
    }

    return connect(mapStateToProps)(RedirectComponent)
}
