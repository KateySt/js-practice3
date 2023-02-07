import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import './ListContact.css';
import RowsOfList from "../row/RowsOfList";
import useList from "../../hooks/useList";
import useAlbumsList from "../../hooks/useAlbumsList";
import VisibilityIcon from '@mui/icons-material/Visibility';

const ListContact = () => {
    const {list, onDelete, onClickShowAlbums, isShow} = useList();
    const {albums, onDeleteAlbum} = useAlbumsList();

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
                                        <div onClick={onClickShowAlbums}>
                                            <VisibilityIcon/>
                                            {isShow && albums &&
                                                albums.map((el, indexAlbum) => {
                                                        if (el.userId === value.id)
                                                            return <RowsOfList key={`albums-- ${indexAlbum}`}
                                                                               data={el}
                                                                               onDelete={onDeleteAlbum}/>
                                                    }
                                                )
                                            }
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

export default ListContact;