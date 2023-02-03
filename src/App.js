import React, {useEffect} from 'react';
import "./App.css";
import RegistrationForm from "./components/form";
import {useDispatch} from "react-redux";
import {getUsersAsync} from "./storege/reducers";
import ListContact from "./components/list";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersAsync());
    }, []);

    return (
        <>
            <RegistrationForm/>
            <ListContact/>
        </>
    );
}

export default App;
