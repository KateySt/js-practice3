import React from "react";
import {useParams} from "react-router-dom";
import useCustomNavigate from "../../../hooks/useCustomNavigate";
import useUserDetails from "../../../hooks/useUserDetails";
import useAlbumsList from "../../../hooks/useAlbumsList";
import RowsOfList from "../../../components/row";
import usePhotosList from "../../../hooks/usePhotosList";

const UserDetailsPage = () => {
    const {id} = useParams();

    const {user} = useUserDetails(id);

    const navigate = useCustomNavigate();

    const onBackButtonClick = () => {
        navigate.goBack();
    }

    const {albums, onDeleteAlbum} = useAlbumsList();

    const {photos} = usePhotosList();

    return (
        <div>
            <h2>Name: {user.name}</h2>
            <div>Phone: {user.phone}</div>
            <div>
                {albums &&
                    albums.map((el, indexAlbum) => {
                            if (el.userId === user.id)
                                return (
                                    <div key={el.id}>
                                        <RowsOfList key={`albums-- ${indexAlbum}`}
                                                    data={el}
                                                    onDelete={onDeleteAlbum}/>
                                        {photos &&
                                            photos.map((photo, indexPhoto) => {
                                                if (photo.albumId === el.id)
                                                    return <img key={`photos-- ${indexPhoto}`}
                                                                src={`${photo.url}`}
                                                                alt={`${photo.title}`}
                                                                style={{width: 100, height: 100}}
                                                    />
                                            })
                                        }
                                    </div>
                                )
                        }
                    )
                }
            </div>
            <button onClick={onBackButtonClick}>Go Back</button>
        </div>
    );

}

export default UserDetailsPage;