import React, { Component } from 'react';
import './App.css';
import AssignmentOne from "./containers/AssignmentOne";
import AssignmentTwo from "./components/AssignmentTwo";
class App extends Component {

    render() {
        return (
            <div className="container">
                <AssignmentOne />
                <AssignmentTwo />

            </div>
        );
    }
}

export default App;
