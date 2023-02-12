import React from 'react';
import useUserDetails from "../../../hooks/useUserDetails";
import {useParams} from "react-router-dom";
import RegistrationForm from "../../../components/form";
import useList from "../../../hooks/useList";
import DeleteIcon from "@mui/icons-material/Delete";
import {Button} from "@mui/material";

const UserUpDatePage = () => {
    const {id} = useParams();

    const {user} = useUserDetails(id);
    const {list, onDelete} = useList();

    return (
        <>
            {user &&
                <RegistrationForm user={user}>
                    {list &&
                        list.map((value, index) =>

                            <div key={`rows-- ${index}`}>

                                <Button variant="contained" color="success" className="contact">
                                    {`${value.name} --${value.phone}`}
                                </Button>
                                <div className="buttonDelete"
                                     onClick={() => {
                                         onDelete(value)
                                     }}>
                                    <DeleteIcon/>
                                </div>

                            </div>
                        )}
                </RegistrationForm>
            }
        </>
    );
}
export default UserUpDatePage;