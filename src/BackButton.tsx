import exp from "constants";
import React from "react";
import { Link } from 'react-router-dom';


const BackButton: React.FC = () => {
    return(
        <Link to="/" id="back-button">Back</Link>
    )
} 

export default BackButton;