import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Buttons } from "./Buttons";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Carregando...</div>
    }

    return (
        <div>
            <h1>Lista de usuários:</h1>
            <ul>
                {users.map(users => (
                    <li key={users.id}>
                        <Link to={`/usuarios/${users.id}`} >
                        <h2>{users.name}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
            <Buttons/>
        </div>
    );
};

export default UserList;