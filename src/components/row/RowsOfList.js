import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import './RowsOfList.css';

const RowsOfList = ({data, onDelete}) => {
    return (
        <div className="rows">
            <div className="contact">
                {`${data.name} ${data.surname} --${data.phone}`}
            </div>
            <div className="buttonDelete"
                 onClick={() => {
                     onDelete(data)
                 }}>
                <DeleteIcon/>
            </div>
        </div>
    );

}

export default RowsOfList;