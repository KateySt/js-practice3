import {useEffect, useState} from "react";

function useRegistrationForm() {
    const [character, setCharacter] = useState({});
    const [isShow, setIsShow] = useState(false);

    const onShowForm = () => {
        setIsShow(!isShow);
    }

    const onSubmitFormik = (values) => {
        setCharacter({name: values.name, phone: values.phone});
    }

    useEffect(() => {
        setIsShow(false);
    }, [character])

    return {
        character,
        isShow,
        onShowForm,
        onSubmitFormik,
    };
}

export default useRegistrationForm;