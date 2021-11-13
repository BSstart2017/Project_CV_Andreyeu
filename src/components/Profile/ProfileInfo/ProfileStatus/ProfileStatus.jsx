import React from "react";
import style from "./ProfileStatus.module.css";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        statusLocal: this.props.statusText
    }

    onEditModeChangeFalse = () => {
        this.setState({
            editMode : false 
        })
        this.props.getAddProfileStatus(this.state.statusLocal) 
    }

    onEditModeChangeTrue = () => {
        this.setState({
            editMode : true
        })
    }
    
    OnStatusChange = (e) => {
        this.setState({
            statusLocal: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.statusText !== this.props.statusText){
            this.setState({
                statusLocal: this.props.statusText
            })
        }
    }

    render(){
        return (
            <div className={style.profileInfoBlock}>
            {!this.state.editMode ? <div><span onClick={this.onEditModeChangeTrue}>{this.props.statusText || "No status"}</span></div>
            :<div><input autoFocus={true} onChange={this.OnStatusChange} onBlur={this.onEditModeChangeFalse} value={this.state.statusLocal} /></div>}
            </div>
        )
    } 
  }

export default ProfileStatus 