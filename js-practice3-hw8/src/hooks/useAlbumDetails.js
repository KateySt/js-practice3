import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAlbumDetails, selectAlbum} from "../features/albums/AlbumsSlice";

const useAlbumDetails = (id) => {
    const album = useSelector(selectAlbum);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchAlbum();
    }, [id]);

    function fetchAlbum() {
        dispatch(getAlbumDetails(id));
    }

    return {
        album,
    };
}

export default useAlbumDetails;