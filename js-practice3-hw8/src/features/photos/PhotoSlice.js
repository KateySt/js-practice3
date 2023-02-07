import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";

export const PhotoSlice = createSlice({
    name: 'photos',
    initialState: {
        PhotoList: [],
        deleteElement: {},
    },
    reducers: {
        postList: (state, action) => {
            state.PhotoList = [...state.PhotoList, action.payload];
        },
        deleteList: (state, action) => {
            state.deleteElement = state.PhotoList.splice(state.PhotoList.map(el => el.url).indexOf(action.payload.title), 1);
        },
        getList: (state, action) => {
            state.PhotoList = action.payload;
        },
    },
});

export const {postList, deleteList, getList} = PhotoSlice.actions;

export const selectPhotoList = (state) => state.photos.PhotoList;

export const postListPhotos = (element) => (dispatch) => {
    axios({
        method: 'post',
        url: 'photos',
        data: element
    }).catch((err) => console.log("Don`t correct input", err));

    dispatch(postList(element));
}

export const getPhotosAsync = () => (dispatch) => {
    axios.get('photos').then((data) => data.data)
        .then((photos) => dispatch(getList(photos)))
        .catch((err) => console.log("Don`t correct input", err));
}

export const deleteListPhotos = (element) => (dispatch) => {
    axios.delete(`photos/${element.id}`, {
        params: {
            albumId: element.albumId,
            id: element.id,
            title: element.title,
            url: element.url,
            thumbnailUrl: element.thumbnailUrl,
        }
    }).catch((err) => console.log("Don`t correct input", err));

    dispatch(deleteList(element));
}

export default PhotoSlice.reducer;