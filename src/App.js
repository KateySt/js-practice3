import RegistrationForm from "./components/form";
import React from 'react';
import "./App.css"
import ListContact from "./components/list";

class App extends React.Component {
    render() {
        return (
            <>
                <RegistrationForm>
                    <ListContact/>
                </RegistrationForm>
            </>
        );
    }
}

export default App;
