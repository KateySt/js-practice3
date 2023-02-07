import {useEffect} from "react";
import {getUserDetails, selectUser} from "../features/users/UsersSlice";
import {useDispatch, useSelector} from "react-redux";

const useUserDetails = (id) => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchUser();
    }, [id]);

    function fetchUser() {
        dispatch(getUserDetails(id));
    }

    return {
        user,
    };
}

export default useUserDetails;