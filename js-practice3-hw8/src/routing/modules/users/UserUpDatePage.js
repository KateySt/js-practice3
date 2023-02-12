import React, {useContext, useEffect} from 'react';
import useUserDetails from "../../../hooks/useUserDetails";
import {useParams} from "react-router-dom";
import RegistrationForm from "../../../components/form";
import {ContextForm} from "../../../components/form/context/ContextForm";

const UserUpDatePage = () => {
    const {id} = useParams();

    const {user} = useUserDetails(id);

    const value = useContext(ContextForm);

    useEffect(()=>{
        console.log("upData",value)
    },[value])

    return (
        <>
            {user &&
                <RegistrationForm user={user}>
                    UpData:
                    {value.name &&
                        <div>{`${value.name} --${value.phone}`}</div>
                    }
                </RegistrationForm>
            }
        </>
    );
}
export default UserUpDatePage;