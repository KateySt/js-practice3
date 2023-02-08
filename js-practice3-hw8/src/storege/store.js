import {configureStore} from '@reduxjs/toolkit'
import UsersReducer from '../features/users/UsersSlice';
import PhotosReducer from '../features/photos/PhotoSlice';
import AlbumsReducer from '../features/albums/AlbumsSlice';

export default configureStore({
    reducer: {
        users: UsersReducer,
        albums: AlbumsReducer,
        photos:PhotosReducer,
    },
});