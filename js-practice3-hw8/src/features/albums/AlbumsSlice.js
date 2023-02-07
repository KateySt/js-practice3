import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";

export const AlbumsSlice = createSlice({
    name: 'albums',
    initialState: {
        AlbumsList: [],
        deleteElement: {},
        album: {},
    },
    reducers: {
        postList: (state, action) => {
            state.AlbumsList = [...state.AlbumsList, action.payload];
        },
        deleteList: (state, action) => {
            state.deleteElement = state.AlbumsList.splice(state.AlbumsList.map(el => el.title).indexOf(action.payload.title), 1);
        },
        getList: (state, action) => {
            state.AlbumsList = action.payload;
        },
        getAlbum: (state, action) => {
            state.album = action.payload;
        },
    },
});

export const {postList, deleteList, getList, getAlbum} = AlbumsSlice.actions;

export const selectAlbumsList = (state) => state.albums.AlbumsList;

export const selectAlbum = (state) => state.albums.album;

export const postListAlbums = (element) => (dispatch) => {
    axios({
        method: 'post',
        url: 'albums',
        data: element
    }).catch((err) => console.log("Don`t correct input", err));

    dispatch(postList(element));
}

export const getAlbumsAsync = () => (dispatch) => {
    axios.get('albums').then((data) => data.data)
        .then((albums) => dispatch(getList(albums)))
        .catch((err) => console.log("Don`t correct input", err));
}

export const deleteListAlbums = (element) => (dispatch) => {
    axios.delete(`albums/${element.id}`, {
        params: {
            userId: element.userId,
            id: element.id,
            title: element.title,
        }
    }).catch((err) => console.log("Don`t correct input", err));

    dispatch(deleteList(element));
}
export const getAlbumDetails = (id) => (dispatch) => {
    axios.get(`albums/${id}`).then((data) => data.data)
        .then(album => dispatch(getAlbum(album)))
        .catch((err) => console.log("Don`t correct input", err));
}
export default AlbumsSlice.reducer;