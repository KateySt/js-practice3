import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import './ListContact.css';
import RowsOfList from "../row/RowsOfList";
import {connect} from "react-redux";
import {deleteListUsers} from "../../storege/reducers";

const ListContact = ({usersList, onDelete}) => {
    return (
        <>
            <Box sx={{maxWidth: 752}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <List dense={false}>
                            {usersList &&
                                usersList.map((value, index) =>
                                    <RowsOfList key={`rows-- ${index}`} data={value}
                                                onDelete={onDelete}/>
                                )}
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </>
    );

};

function mapStateToProps({usersList}) {
    return {
        usersList: usersList,
    }
}

const mapDispatchToProps = {
    onDelete: deleteListUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContact);

