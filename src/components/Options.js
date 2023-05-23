import React from "react";
import Option from "./Option";

export default class Options extends React.Component{

    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteAll}>delete all tasks</button>
                {
                    this.props.options.map((option) => <Option option={option} key={option} handleDeleteOption={this.props.handleDeleteOption} />)
                }
            </div>
        );
    }
}