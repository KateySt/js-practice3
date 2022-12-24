import {Component} from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import './ListContact.css';
import RowsOfList from "../row/RowsOfList";
import {ContextForm} from "../form/context/ContextForm";

class ListContact extends Component {
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
        ]
    }

    componentDidUpdate() {
        if (this.state.list)
            if (this.context.character.phone !== undefined) {
                this.setState({
                    list: [...this.state.list, {
                        id: Date.now(),
                        name: this.context.character.name,
                        surname: this.context.character.surname,
                        phone: this.context.character.phone
                    }],
                });
                this.context.character = {}
            }
    }

    onDelete = (value) => {
        this.setState({
            list: this.state.list.filter((el) => value != el)
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
                                        <RowsOfList key={`rows-- ${index}`} date={value}
                                                    onDelete={this.onDelete}/>
                                    )}
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </>
        );
    };
};

ListContact.contextType = ContextForm;

export default ListContact;