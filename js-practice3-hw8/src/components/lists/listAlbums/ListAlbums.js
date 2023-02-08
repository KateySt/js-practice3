import './ListAlbums.css';
import RowsOfList from "../../row/RowsOfList";
import useAlbumsList from "../../../hooks/useAlbumsList";
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from "react";

const ListAlbums = ({userId}) => {
    const {albums, onDeleteAlbum, isShow, onClickShowAlbums} = useAlbumsList();

    return (
        <div onClick={onClickShowAlbums}>
            <VisibilityIcon/>
            {isShow && albums &&
                albums.map((el, indexAlbum) => {
                        if (el.userId === userId)
                            return <RowsOfList key={`albums-- ${indexAlbum}`}
                                               data={el}
                                               onDelete={onDeleteAlbum}/>
                    }
                )
            }
        </div>
    );
};

export default ListAlbums;