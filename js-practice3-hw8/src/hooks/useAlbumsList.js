import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteListAlbums, getAlbumsAsync, selectAlbumsList} from "../features/albums/AlbumsSlice";

function useAlbumsList() {
    const albums = useSelector(selectAlbumsList);
    const dispatch = useDispatch();
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        dispatch(getAlbumsAsync());
    }, []);

    const onDeleteAlbum = (value) => {
        dispatch(deleteListAlbums(value));
    }

    const onClickShowAlbums = () => {
        setIsShow(!isShow);
    }

    return {
        albums,
        onDeleteAlbum,
        isShow,
        onClickShowAlbums,
    };
}

export default useAlbumsList;