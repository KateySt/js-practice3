import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import './ListContact.css';
import RowsOfList from "../../row/RowsOfList";
import useList from "../../../hooks/useList";
import React from "react";
import ListAlbums from "../listAlbums";

const ListContact = () => {
    const {list, onDelete} = useList();

    return (
        <>
            <Box sx={{maxWidth: 1000}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <List dense={false}>
                            {list &&
                                list.map((value, index) =>
                                    <div key={`rows-- ${index}`}>
                                        <RowsOfList key={`user-- ${index}`} data={value}
                                                    onDelete={onDelete}/>
                                            <ListAlbums userId={value.id}/>
                                    </div>
                                )}
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ListContact;