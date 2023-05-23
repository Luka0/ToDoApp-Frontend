import React from "react";

export default class AddOption extends React.Component{

    state = {
        error : undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.option.value.trim();

        if(option === ""){
            this.setState((prevState) => ({
                error : "*You entered an invalid value. Please try again.*"
            }));
        }
        else if(this.props.options.includes(option)){
            this.setState(() => ({
                error : "*Task already exists. Please try again.*"
            }));
        }
        else{
            this.props.handleAddOption(option);
            e.target.option.value = "";
            this.setState((prevState) => ({
                error : undefined
            }));
        }

    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input name="option"></input>
                    <button>Add task</button>
                </form>
                <div className="error">
                    {this.state.error}
                </div>
            </div>
        );
    }
}
