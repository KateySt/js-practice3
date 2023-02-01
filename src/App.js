import RegistrationForm from "./components/form";
import React from 'react';
import "./App.css"
import ListContact from "./components/list";

const App = () => {
    return (
        <RegistrationForm>
            <ListContact/>
        </RegistrationForm>
    );
}

export default App;
