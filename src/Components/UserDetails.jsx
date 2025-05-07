import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Buttons } from "./Buttons";

const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log('estou sendo usado!')

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            setUser(response.data);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <div>Cerregando...</div>
    };

    return (
    <div>
        <h1>DADOS DO USUÁRIO:</h1>
        <h2>Nome:</h2>
            <p>{user.name}</p>
        <h2>Endereço:</h2>    
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.address.city}</p>
        <h2>Número de telefone:</h2>
            <p>{user.phone}</p>
        <Buttons/>
    </div>
    );
}

export default UserDetails;