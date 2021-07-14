import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserData} from "../../redux/auth-reducer";
import axios from "axios";
import {Header} from "./Header";

type HeaderContainerPropsType = {
   setUserData: (id: number, email: string, login: string) => void;
   isAuth: boolean;
    login: string;
}

class HeaderContainer extends React.Component<HeaderContainerPropsType>{
          componentDidMount() {
              axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                  withCredentials: true
              })
                  .then(response => {
                      if(response.data.resultCode === 0) {
                          const {id, email, login} = response.data.data
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
