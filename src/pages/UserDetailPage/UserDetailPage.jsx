import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';



const UserDetailPage = () => {
    const [userById, setUserById] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const BASE_URL = "https://cryptune-backend.herokuapp.com/";

        axios.get(`${BASE_URL}/users/${id}`).then((res) => {
            setUserById(res.data.data.user)
        }).catch((error) => {
            console.log(error)
        })
       
    }, [id])

    console.log(userById);

    return (
        <div>
            Hello {userById.name}
        </div>
    )
}

export default UserDetailPage
