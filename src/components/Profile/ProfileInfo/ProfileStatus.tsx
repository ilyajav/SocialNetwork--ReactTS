import React, {ChangeEvent} from "react";

type StateType = {
    editMode: boolean;
    status: string;
}

type ProfileStatusPropsType = {
    status: string;
    changeUserStatus: (status: string) => void;

}

export class ProfileStatus extends React.Component<ProfileStatusPropsType>{
     state: StateType = {
         editMode: false,
         status: this.props.status,
     }
     activateEditMode = () =>{
       this.setState({
           editMode: true
       })
     }

     deactivateEditMode = () =>{
         this.setState({
             editMode: false,
         })
         this.props.changeUserStatus(this.state.status)
     }

     onChange = (e: ChangeEvent<HTMLInputElement>) =>{
           this.setState({
               status: e.currentTarget.value
           })

     }

     render() {
         return (
             <div>
                 {!this.state.editMode &&
                 <div>
                     <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
                 </div>
                 }
                 {this.state.editMode &&
                 <div>
                     <input
                         onChange={this.onChange}
                         autoFocus={true}
                         onBlur={this.deactivateEditMode}
                         value={this.props.status}/>
                 </div>
                 }
             </div>
         )
     }
}
