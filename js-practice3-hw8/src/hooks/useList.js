import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteListUsers, getUsersAsync, selectUsersList} from "../features/users/UsersSlice";

function useList() {
    const list = useSelector(selectUsersList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersAsync());
    }, []);

    const onDelete = (value) => {
        dispatch(deleteListUsers(value));
    }

    return {
        list,
        onDelete,
    };
}

export default useList;
