import React from "react";

export default class Option extends React.Component{
    
    handleDeleteOption =  () => {
        this.props.handleDeleteOption(this.props.option);
    }
    
    render(){
        return (
            <div className="center option">
                {this.props.option}
                <button className="x-button" onClick={this.handleDeleteOption}>X</button>
            </div>
        );
    }
}