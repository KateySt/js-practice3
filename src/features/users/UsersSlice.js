import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
    name: 'users',
    initialState: {
        usersList: [],
        deleteUser: 0,
    },
    reducers: {
        postList: (state, action) => {
            state.usersList = [...state.usersList, action.payload];
        },
        deleteList: (state, action) => {
            state.deleteUser = state.usersList.splice(state.usersList.indexOf(action.payload), 1);
        },
        getList: (state, action) => {
            state.usersList = action.payload;
        },
    },
});

export const {postList, deleteList, getList} = UsersSlice.actions;

export const selectUsersList = (state) => state.users.usersList;

export const postListUsers = (element) => (dispatch) => {
    axios({
        method: 'post',
        url: '/users',
        data: element
    }).catch((err) => console.log("Don`t correct input", err));

    dispatch(postList(element));
}

export const getUsersAsync = () => (dispatch) => {
    axios.get('/users').then((data) => data.data)
        .then((characters) => dispatch(getList(characters)))
        .catch((err) => console.log("Don`t correct input", err));
}

export const deleteListUsers = (element) => (dispatch) => {
    axios.delete(`/users/${element.id}`, {
        params: {
            name: element.name,
            phone: element.phone
        }
    }).catch((err) => console.log("Don`t correct input", err));

    dispatch(deleteList(element));
}

export default UsersSlice.reducer;