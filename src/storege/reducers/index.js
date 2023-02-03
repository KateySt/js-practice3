import {ACTION_ADD, ACTION_DELETE, ACTION_GET, addList, deleteList, getList} from "../actions/listUsers";
import axios from "axios";

const initialState = {
    usersList: [],
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ACTION_DELETE:
            return {
                ...state,
                usersList: state.usersList.filter(el => el.id !== payload.id)
            };
        case ACTION_ADD:
            return {
                usersList: [...state.usersList, payload]
            };
        case ACTION_GET:
            return {
                ...state,
                usersList: payload
            };
        default:
            return state;
    }
}

export const postListUsers = (element) => (dispatch) => {
    axios({
        method: 'post',
        url: '/users',
        data: element
    }).catch((err) => console.log("Don`t correct input", err));

    dispatch(addList(element));
}

export const getUsersAsync = () => (dispatch) => {
    axios.get('/users').then((data) => data.data)
        .then((characters) => dispatch(getList(characters)))
        .catch((err) => console.log("Don`t correct input", err));
}

export const deleteListUsers = (element) => (dispatch) => {
    axios.delete(`/users/${element.id}`, {
        params: {
            id: element.id,
            name: element.name,
            phone: element.phone
        }
    }).catch((err) => console.log("Don`t correct input", err));

    dispatch(deleteList(element));
}

export default rootReducer;