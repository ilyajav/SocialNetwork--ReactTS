import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuth} from "../../redux/auth-reducer";
import {Header} from "./Header";

type HeaderContainerPropsType = {
    isAuth: boolean;
    login: string;
    setAuth: () => void;
}

class HeaderContainer extends React.Component<HeaderContainerPropsType>{
          componentDidMount() {
              this.props.setAuth()
          }
          render() {
              return <Header
                  isAuth={this.props.isAuth}
                  login={this.props.login}
              />
          }
}

type MapStateToPropsType = {
    isAuth: boolean;
    login: string;
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType =>{
    return {
        isAuth: state.authData.isAuth,
        login: state.authData.login,
    }
}

export default connect(mapStateToProps, {setAuth})(HeaderContainer)
