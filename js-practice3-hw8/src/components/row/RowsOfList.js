import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import './RowsOfList.css';
import UpdateIcon from '@mui/icons-material/Update';
import {NavLink, useLocation} from "react-router-dom";

const RowsOfList = ({data, onDelete}) => {
    const {pathname} = useLocation();

    return (
        <div className="rows">
            {
                data.name ?
                    <NavLink to={`${pathname}/${data.id}`}>
                        <div className="contact">
                            {`${data.name} --${data.phone}`}
                        </div>
                    </NavLink>
                    :
                    <NavLink to={`/albums/${data.id}`}>
                        <div className="contact">
                            {`${data.id}. ${data.title}`}
                        </div>
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