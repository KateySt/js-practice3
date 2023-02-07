import {ContextForm} from "../components/form/context/ContextForm";
import {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteListUsers, getUsersAsync, postListUsers, selectUsersList} from "../features/users/UsersSlice";

function useList() {
    const value = useContext(ContextForm);
    const list = useSelector(selectUsersList);
    const dispatch = useDispatch();
    const [isShow, setIsShow] = useState(false);

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

    const onClickShowAlbums = () => {
        setIsShow(!isShow);
    }

    return {
        list,
        onDelete,
        onClickShowAlbums,
        isShow,
    };
}

export default useList;
