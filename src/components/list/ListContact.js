import {useContext, useEffect, useState} from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import './ListContact.css';
import RowsOfList from "../row/RowsOfList";
import {ContextForm} from "../form/context/ContextForm";

const ListContact = () => {
    const value = useContext(ContextForm);
    const [list, setList] = useState(
        [
            {
                id: 0,
                name: 'Bob_0',
                surname: 'Bobcov',
                phone: '00000002',
            },
            {
                id: 2,
                name: 'Bob_1',
                surname: 'Bobcof',
                phone: '00000001',
            },
            {
                id: 3,
                name: 'Bob_2',
                surname: 'Bobcow',
                phone: '00000003',
            },
        ]
    );

    useEffect(() => {
        if (list)
            if (value.phone !== undefined) {
                setList([...list, {
                    id: Date.now(),
                    name: value.name,
                    surname: value.surname,
                    phone: value.phone
                }]);
            }
    }, [value]);


    const onDelete = (value) => {
        const newList = list.filter((el) => el !== value);
        setList(newList);
    }

    return (
        <>
            <Box sx={{maxWidth: 752}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <List dense={false}>
                            {list &&
                                list.map((value, index) =>
                                    <RowsOfList key={`rows-- ${index}`} data={value}
                                                onDelete={onDelete}/>
                                )}
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </>
    );

};

export default ListContact;