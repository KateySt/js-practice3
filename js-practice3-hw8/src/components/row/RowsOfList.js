import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import './RowsOfList.css';
import UpdateIcon from '@mui/icons-material/Update';
import {NavLink, useLocation} from "react-router-dom";
import {Button} from "@mui/material";

const RowsOfList = ({data, onDelete}) => {
    const {pathname} = useLocation();

    return (
        <div className="rows">
            {
                data.name ?
                    <NavLink to={`${pathname}/${data.id}`}>
                        <Button variant="contained" color="success" className="contact">
                            {`${data.name} --${data.phone}`}
                        </Button>
                    </NavLink>
                    :
                    <NavLink to={`/albums/${data.id}`}>
                        <Button variant="outlined" color="secondary" className="contact">
                            {`${data.id}. ${data.title}`}
                        </Button>
                    </NavLink>
            }
            <div className="buttonDelete"
                 onClick={() => {
                     onDelete(data)
                 }}>
                <DeleteIcon/>
            </div>

            <NavLink to={`${pathname}/update/${data.id}`}>
                <UpdateIcon/>
            </NavLink>

        </div>
    );

}

export default RowsOfList;