import React from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC<any> = (props: any) => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="header-left">
                <FontAwesomeIcon icon={faArrowLeft} className="back-icon" onClick={() => navigate(-1)} />
                <Link to="/" className="home-button">Home</Link>
            </div>
            <h1 className="header-title">Gestione Automezzi e Filiali</h1>
        </div>
    );
}

export default Header;