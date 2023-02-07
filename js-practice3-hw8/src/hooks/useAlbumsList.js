import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteListAlbums, getAlbumsAsync, selectAlbumsList} from "../features/albums/AlbumsSlice";

function useAlbumsList() {
    const albums = useSelector(selectAlbumsList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbumsAsync());
    }, []);

    const onDeleteAlbum = (value) => {
        dispatch(deleteListAlbums(value));
    }

    return {
        albums,
        onDeleteAlbum,
    };
}

export default useAlbumsList;