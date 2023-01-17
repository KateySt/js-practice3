import {ContextForm} from "../components/form/context/ContextForm";
import {useContext, useEffect, useState} from "react";
import axios from "axios";

function useList() {
    const value = useContext(ContextForm);
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('/users').then((data) => data.data)
            .then((characters) => setList(characters))
            .catch((err) => console.log("Don`t correct input", err));
    }, []);

    useEffect(() => {
        if (list)
            if (value.phone !== undefined) {
                axios({
                    method: 'post',
                    url: '/users',
                    data: {
                        name: value.name,
                        phone: value.phone
                    }
                }).catch((err) => console.log("Don`t correct input", err));
                setList([...list, {
                    name: value.name,
                    phone: value.phone
                }]);
            }
    }, [value]);
    const onDelete = (value) => {
        const newList = list.filter((el) => el !== value);
        axios.delete(`/users/${value.id}`, {
            params: {
                name: value.name,
                phone: value.phone
            }
        }).catch((err) => console.log("Don`t correct input", err));
        setList(newList);
    }

    return {
        list,
        onDelete
    };
}

export default useList;