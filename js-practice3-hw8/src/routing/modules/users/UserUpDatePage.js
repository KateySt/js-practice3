import React from 'react';
import useUserDetails from "../../../hooks/useUserDetails";
import {useParams} from "react-router-dom";
import RegistrationForm from "../../../components/form";

const UserUpDatePage = () => {
    const {id} = useParams();

    const {user} = useUserDetails(id);

    return (
        <>
            {user &&
                <RegistrationForm user={user}/>
            }
        </>
    );
}
export default UserUpDatePage;