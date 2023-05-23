import React from "react";
import Header from "./Header";
import Options from "./Options";
import AddOption from "./AddOption";
import axios from "axios";

export default class ToDoApp extends React.Component{

    state = {
        options : [1, 2, 3]
    };

    handleDeleteOption = (optionToDelete) => {
        axios.delete("http://localhost:8080/deleteTaskByDescription?description="+optionToDelete);

        this.setState((prevState) => ({
            options : prevState.options.filter((option) => option !== optionToDelete )
        }));
    }

    handleAddOption = (newOption) => {
        axios.post("http://localhost:8080/insertTask", { "description" : newOption });
   
        this.setState((prevState) => ({
            options : prevState.options.concat(newOption)
        }));

    }

    handleDeleteAll = () => {
        axios.delete("http://localhost:8080/deleteAllTasks");

        this.setState((prevState) => ({
            options : []
        }));
    }

    /*
    componentDidMount(){
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({
                    options
                }));
            }
        }
        catch(e){
            // If there is no "options" in the local storage, do nothing
        }
    }
    */

    componentDidMount(){
        axios.get("http://localhost:8080/getAllTasks")
        .then(response => {
            this.setState(() => ({options : response.data.map((task) => task["description"])}));
        })
        .catch(error => {console.log(error)});
    }

    componentDidUpdate(){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
    }

    render(){
        return (
            <div>
                <Header />
                <Options options={this.state.options} handleDeleteOption={this.handleDeleteOption} handleDeleteAll={this.handleDeleteAll} />
                <AddOption options={this.state.options} handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
