import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import './ListContact.css';
import RowsOfList from "../row/RowsOfList";
import useList from "../../hooks/useList";

const ListContact = () => {
    const {list, onDelete} = useList();

    return (
        <>
            <Box sx={{maxWidth: 752}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <List dense={false}>
                            {list &&
                                list.map((value, index) =>
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

export default ListContact;