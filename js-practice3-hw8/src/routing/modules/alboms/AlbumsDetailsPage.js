import React from 'react';
import {useParams} from "react-router-dom";
import useCustomNavigate from "../../../hooks/useCustomNavigate";
import useAlbumDetails from "../../../hooks/useAlbumDetails";
import usePhotosList from "../../../hooks/usePhotosList";

const AlbumsDetailsPage = () => {
    const {id} = useParams();

    const {album} = useAlbumDetails(id);

    const navigate = useCustomNavigate();

    const onBackButtonClick = () => {
        navigate.goBack();
    }

    const {photos} = usePhotosList();

    return (
        <div>
            <h2>Title: {album.title}</h2>
            <div>
                {photos &&
                    photos.map((photo, indexPhoto) => {
                        if (photo.albumId === album.id)
                            return <img key={`photos-- ${indexPhoto}`}
                                        src={`${photo.url}`}
                                        alt={`${photo.title}`}
                                        style={{width: 100, height: 100}}
                            />
                    })
                }
            </div>
            <button onClick={onBackButtonClick}>Go Back</button>
        </div>
    );
}
export default AlbumsDetailsPage;