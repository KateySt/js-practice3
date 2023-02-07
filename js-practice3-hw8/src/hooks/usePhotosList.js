import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPhotosAsync, selectPhotoList} from "../features/photos/PhotoSlice";

function usePhotosList() {
    const photos = useSelector(selectPhotoList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotosAsync());
    }, []);

    return {
        photos
    };
}

export default usePhotosList;