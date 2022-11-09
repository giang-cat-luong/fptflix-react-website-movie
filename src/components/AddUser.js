import { useState } from 'react';
import { addUser } from './Users';
import { useDispatch } from 'react-redux';
import { Button } from 'react-materialize';
import { TextField } from '@mui/material';

export default function AddUser() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [id, setId] = useState(0);
    return (
        <>
            <TextField
                label="Name"
                name="name"
                value={name}
                onChange={(event) => { setName(event.target.value); }}
            />
            <TextField
                name="username"
                label="Username"
                value={username}
                onChange={(event) => { setUsername(event.target.value); }}
            />
            <Button onClick={() => {
                dispatch(addUser({ id: setId(id + 1), name: name, username: username }));
            }}
            >
                Add user
            </Button>
        </>
    )
}
