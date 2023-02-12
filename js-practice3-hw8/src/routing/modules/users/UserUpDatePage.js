import React from 'react';
import useUserDetails from "../../../hooks/useUserDetails";
import {useParams} from "react-router-dom";
import RegistrationForm from "../../../components/form";
import useList from "../../../hooks/useList";

const UserUpDatePage = () => {
    const {id} = useParams();
    const {list} = useList();
    const {user} = useUserDetails(id);

    return (
        <>
            {user.name &&
                <>
                    <RegistrationForm user={user}/>
                    UpData:
                    {list &&
                        list.map((value) =>
                            <div key={`update --- ${value.id}`}>{`${value.name} --${value.phone}`}</div>
                        )
                    }
                </>
            }
        </>
    );
}
export default UserUpDatePage;