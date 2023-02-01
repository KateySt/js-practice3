import {ContextForm} from "../components/form/context/ContextForm";
import {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteListUsers, getUsersAsync, postListUsers, selectUsersList} from "../features/users/UsersSlice";

function useList() {
    const value = useContext(ContextForm);
    const list = useSelector(selectUsersList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersAsync());
    }, []);

    useEffect(() => {
        if (list)
            if (value.phone !== undefined) {
                dispatch(postListUsers({
                    name: value.name,
                    phone: value.phone
                }));
            }
    }, [value]);

    const onDelete = (value) => {
        dispatch(deleteListUsers(value));
    }

    return {
        list,
        onDelete
    };
}

export default useList;
