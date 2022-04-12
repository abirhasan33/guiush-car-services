import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Serivce.css'

const Serivce = ({serivce}) => {
    const {id, name, img, price, description} = serivce;
    const nevigate = useNavigate();
    const navigetToServiseDetail = id => {
        nevigate(`/service/${id}`);
    }
    return (
        <div className='serivces'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p className='p'>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigetToServiseDetail(id)} className='button'>Book: {name}</button>
        </div>
    );
};

export default Serivce;