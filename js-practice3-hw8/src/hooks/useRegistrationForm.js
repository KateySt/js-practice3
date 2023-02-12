import {useState} from "react";

function useRegistrationForm() {
    const [character, setCharacter] = useState({});

    const onSubmitFormik = (values) => {
        setCharacter({name: values.name, phone: values.phone});
    }

    return {
        character,
        onSubmitFormik,
    };
}

export default useRegistrationForm;