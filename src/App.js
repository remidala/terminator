import React, { Component, } from "react";
import TerminatorList from "./components/terminator-list/terminatorList.component";
import { models } from './model.js';
import SearchBox from "./components/searchbox/searchbox.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            models: models,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState = ({ searchField: event.target.value });
    }

    render() {
        const filteredModels = this.state.models.filter((model) => {
            return model.name
            .toLowerCase()
            .includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className ="tc">
                <h1>Terminator`s models</h1>
                <SearchBox searchCange={this.onSearchChange} />
                <TerminatorList models={filteredModels} />
            </div>
        );
    }
}


export default App;