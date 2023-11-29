import React from "react";
import { Link } from 'react-router-dom';
import './ArticleList.css';
const AdminBoton = () => {
    return (
        <Link to="/admin">
            <button className="button"> Ingresar como Admin</button>
        </Link>
    );
}

export default AdminBoton;