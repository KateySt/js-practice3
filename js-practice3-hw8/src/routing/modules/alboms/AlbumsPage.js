import React from 'react';
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import RowsOfList from "../../../components/row";
import Box from "@mui/material/Box";
import useAlbumsList from "../../../hooks/useAlbumsList";

const AlbumsPage = () => {
    const {albums, onDeleteAlbum} = useAlbumsList();
    return (
        <>
            <Box sx={{maxWidth: 1000}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <List dense={false}>
                            {albums &&
                                albums.map((el, indexAlbum) =>
                                    <RowsOfList key={`albums-- ${indexAlbum}`}
                                                data={el}
                                                onDelete={onDeleteAlbum}/>
                                )
                            }
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default AlbumsPage;