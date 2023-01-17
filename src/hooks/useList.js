import {ContextForm} from "../components/form/context/ContextForm";
import {useContext, useEffect, useState} from "react";

function useList() {
    const value = useContext(ContextForm);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((data) => data.json())
            .then((data) => setList(data))
            .catch((error) => console.log("Error", error));
    }, []);

    useEffect(() => {
        if (list)
            if (value.phone !== undefined) {
                fetch(`https://jsonplaceholder.typicode.com/users`,
                    {
                        method: "POST",
                        body: JSON.stringify(value),
                        headers: {'Content-Type': 'application/json'}
                    })
                    .then((data) => data.json())
                    .then((data) => setList([...list, {
                        name: value.name,
                        phone: value.phone
                    }]))
                    .catch((error) => console.log("Error", error));

                setList([...list, {
                    name: value.name,
                    phone: value.phone
                }]);
            }
    }, [value]);
    const onDelete = (value) => {
        const newList = list.filter((el) => el !== value);
        fetch(`https://jsonplaceholder.typicode.com/users/${value.id}`,
            {
                method: "DELETE"
            })
            .catch((error) => console.log("Error", error));
        setList(newList);
    }

    return {
        list,
        onDelete
    };
}

export default useList;