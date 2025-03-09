import React, { useEffect } from 'react';
import gears from "../assets/gears.jpg"
import { useNavigate } from 'react-router-dom';
import { loremIpsum } from '../utilities/utilities';
import '../App.css';

const Homepage: React.FC<any> = (props: any) => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(`/gestione`);
    };

    return (
        <div className="homepage-container">
            <div className="content-container">
                <div className="text-section">
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
