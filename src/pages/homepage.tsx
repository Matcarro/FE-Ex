import React, { useEffect, useState } from 'react';
import gears from "../assets/gears.jpg"
import { useNavigate } from 'react-router-dom';
import { loremIpsum } from '../utilities/utilities';
import '../App.css';
import { getUser } from '../services/apiServices';
import { useDispatch } from 'react-redux';
import { setUserRedux } from '../store/userSlice'; // Assuming userSlice is defined in the Redux store

const Homepage: React.FC<any> = (props: any) => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Initialize Redux dispatch
    const handleButtonClick = () => {
        navigate(`/gestione`);
    };
    const [user, setUser] = useState({username: '', email: ''});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getUser()
                setUser(user);
                dispatch(setUserRedux({username: user.username, email: user.email})); // Save to Redux store
            } catch (err: any) {
                alert(err.message);
            }
        }
        fetchUser()
    }, [dispatch]);

    return (
        <div className="homepage-container">
            <div className="content-container">
                <div className="text-section">
                    <h2>Benvenuto {user.username.toLocaleUpperCase()}</h2>
                    {loremIpsum()}
                </div>
                <div className="image-section">
                    <img src={gears} alt="Example" />
                </div>
            </div>
            <div className="button-container">
                <button className="button-management" onClick={handleButtonClick}>Gestisci</button>
            </div>
        </div>
    );
}

export default Homepage;
