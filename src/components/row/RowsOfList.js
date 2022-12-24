import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import './RowsOfList.css';

class RowsOfList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="rows">
                <div className="contact">
                    {`${this.props.date.name} ${this.props.date.surname} --${this.props.date.phone}`}
                </div>
                <div className="buttonDelete"
                     onClick={() => {
                         this.props.onDelete(this.props.date)
                     }}>
                    <DeleteIcon/>
                </div>
            </div>
        );
    }
}

export default RowsOfList;