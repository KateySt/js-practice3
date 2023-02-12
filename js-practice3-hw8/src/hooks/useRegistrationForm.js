import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeUsersAsync, postListUsers} from "../features/users/UsersSlice";

function useRegistrationForm() {
    const {id} = useParams();
    const isAddMode = !id;
    const dispatch = useDispatch();

    const onSubmitFormik = (values) => {
        if (isAddMode)
            dispatch(postListUsers({
                id: Date.now(),
                name: values.name,
                phone: values.phone
            }));
        else
            dispatch(changeUsersAsync({
                id: values.id,
                name: values.name,
                phone: values.phone
            }));
    }

    return {
        onSubmitFormik,
    };
}

export default useRegistrationForm;