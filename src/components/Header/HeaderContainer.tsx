import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserData} from "../../redux/auth-reducer";
import {Header} from "./Header";
import {usersAPI} from "../../api/api";

type HeaderContainerPropsType = {
   setUserData: (id: number, email: string, login: string) => void;
   isAuth: boolean;
    login: string;
}

class HeaderContainer extends React.Component<HeaderContainerPropsType>{
          componentDidMount() {
              usersAPI.authUser().then(data => {
                      if(data.resultCode === 0) {
                          const {id, email, login} = data.data
                          this.props.setUserData(id, email, login)
                      }
                  })
          }
          render() {
              return <Header isAuth={this.props.isAuth} login={this.props.login} />
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

export default connect(mapStateToProps, {setUserData})(HeaderContainer)
