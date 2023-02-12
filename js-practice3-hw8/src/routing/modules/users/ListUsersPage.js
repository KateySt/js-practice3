import React from 'react';
import ListContact from "../../../components/lists/listContacts";
import RegistrationForm from "../../../components/form";

const ListUsersPage = () => {
    return (
        <>
            Add user:
            <RegistrationForm user={{name: 'Patric', phone: ''}}/>
            <ListContact/>
        </>
    );
}
export default ListUsersPage;