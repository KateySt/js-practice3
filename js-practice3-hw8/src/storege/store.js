import {configureStore} from '@reduxjs/toolkit'
import UsersReducer from '../features/users/UsersSlice';
import AlbumsReducer from '../features/albums/AlbumsSlice';
import PhotosReducer from '../features/photos/PhotoSlice';

export default configureStore({
    reducer: {
        users: UsersReducer,
        albums: AlbumsReducer,
        photos:PhotosReducer,
    },
});