import React from "react";

export default class Option extends React.Component{
    
    handleDeleteOption =  () => {
        this.props.handleDeleteOption(this.props.option);
    }
    
    render(){
        return (
            <div>
                {this.props.option}
                <button onClick={this.handleDeleteOption}>X</button>
            </div>
        );
    }
}