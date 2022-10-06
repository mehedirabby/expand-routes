import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Apost.css'

const Apost = ({post}) => {
    const {title,body,id}=post
    const navigate= useNavigate()
    const handleNavigate =()=>{
        navigate(`./Post/${id}`)
    }
    return (
        <div className='post'>
            <div>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>
            <button>Show details</button>
            </Link>
            <button onClick={handleNavigate}>Show details2</button>
            </div>
        </div>
    );
};

export default Apost;