import {Component} from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import './ListContact.css';

class ListContact extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        list: [
            {
                id: 0,
                name: 'Bob_0',
                surname: 'Bobcov',
                phone: '00000002',
            },
            {
                id: 2,
                name: 'Bob_1',
                surname: 'Bobcof',
                phone: '00000001',
            },
            {
                id: 3,
                name: 'Bob_2',
                surname: 'Bobcow',
                phone: '00000003',
            },
        ],
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data.phone != this.props.data.phone) {
            this.setState({
                list: [...this.state.list, {
                    id: Date.now(),
                    name: this.props.data.name,
                    surname: this.props.data.surname,
                    phone: this.props.data.phone
                }],
            });
        }
    }


    onDelete = (value) => {
        this.setState({
            deleteElement: this.state.list.splice(this.state.list.indexOf(value), 1)
        });
    }

    render() {
        return (
            <>
                <Box sx={{maxWidth: 752}}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <List dense={false}>
                                {this.state.list &&
                                    this.state.list.map((value, index) =>
                                        <div key={`rows-- ${index}`} className="rows">
                                            <div className="contact">
                                                {`${value.name} ${value.surname} --${value.phone}`}
                                            </div>
                                            <div className="buttonDelete"
                                                 onClick={() => {
                                                     this.onDelete(value)
                                                 }}>
                                                <DeleteIcon/>
                                            </div>
                                        </div>
                                    )}
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </>
        );
    };
};

export default ListContact;