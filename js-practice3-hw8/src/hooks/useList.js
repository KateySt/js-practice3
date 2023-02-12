import {ContextForm} from "../components/form/context/ContextForm";
import {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    changeUsersAsync,
    deleteListUsers,
    getUsersAsync,
    postListUsers,
    selectUsersList
} from "../features/users/UsersSlice";
import {useRouteMatch} from "react-router-dom";

function useList() {
    const value = useContext(ContextForm);
    const list = useSelector(selectUsersList);
    const dispatch = useDispatch();
    const {url} = useRouteMatch();

    useEffect(() => {
        console.log('user',value)

    }, [value]);

    useEffect(() => {
        if (list)
            if (value.phone !== undefined) {
                if (url === "/users")
                    dispatch(postListUsers({
                        id: Date.now(),
                        name: value.name,
                        phone: value.phone
                    }));
            }
    }, [value]);

    useEffect(() => {
        dispatch(getUsersAsync());
    }, []);

    const onDelete = (value) => {
        dispatch(deleteListUsers(value));
    }

    return {
        list,
        onDelete
    };
}

export default useList;
