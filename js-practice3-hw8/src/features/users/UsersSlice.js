import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
    name: 'users',
    initialState: {
        usersList: [],
        user: {},
        deleteElement: {},
    },
    reducers: {
        postList: (state, action) => {
            state.usersList = [...state.usersList, action.payload];
        },
        deleteList: (state, action) => {
            state.deleteElement = state.usersList.splice(state.usersList.map(el => el.name).indexOf(action.payload.name), 1);
        },
        changeList: (state, action) => {
            state.usersList = state.usersList.map((el) => ({
                ...el,
                name: el.id === action.payload.id ? el.name : action.payload.name,
                phone: el.id === action.payload.id ? el.phone : action.payload.phone,
            }));
        },
        getList: (state, action) => {
            state.usersList = action.payload;
        },
        getUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const {postList, deleteList, getList, getUser, changeList} = UsersSlice.actions;

export const selectUsersList = (state) => state.users.usersList;

export const selectUser = (state) => state.users.user;

export const postListUsers = (element) => (dispatch) => {
    axios({
        method: 'post',
        url: 'users',
        data: element
    }).catch((err) => console.log("Don`t correct input", err));

    dispatch(postList(element));
}

export const getUsersAsync = () => (dispatch) => {
    axios.get('users').then((data) => data.data)
        .then((characters) => dispatch(getList(characters)))
        .catch((err) => console.log("Don`t correct input", err));
}

export const changeUsersAsync = (user) => (dispatch) => {
    dispatch(changeList(user));
}

export const deleteListUsers = (element) => (dispatch) => {
    axios.delete(`users/${element.id}`, {
        params: {
            name: element.name,
            phone: element.phone
        }
    }).catch((err) => console.log("Don`t correct input", err));

    dispatch(deleteList(element));
}

export const getUserDetails = (id) => (dispatch) => {
    axios.get(`users/${id}`).then((data) => data.data)
        .then(user => dispatch(getUser(user)))
        .catch((err) => console.log("Don`t correct input", err));
}

export default UsersSlice.reducer;