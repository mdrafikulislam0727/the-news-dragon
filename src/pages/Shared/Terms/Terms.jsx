import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto commodi aperiam modi error, ratione sit quod rem neque saepe possimus qui quas omnis tempora. Deserunt quisquam iure eius quos cumque.</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;