import React from 'react';
import ListContact from "../../../components/list";
import RegistrationForm from "../../../components/form";

const ListUsersPage = () => {
    return (
        <RegistrationForm user={{name: 'Patric', phone: ''}}>
            <ListContact/>
        </RegistrationForm>
    );
}
export default ListUsersPage;