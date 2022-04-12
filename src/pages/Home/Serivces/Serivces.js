import React, { useEffect, useState } from 'react';
import Serivce from '../Serivce/Serivce';
import './Serivces.css'



const Serivces = () => {

    const [serivces, setSerivces] = useState([]);

    useEffect(()=> {
        fetch('serivces.json')
        .then(res => res.json())
        .then(data => setSerivces(data));
    },[])

    return (
        <div>
            <h1 id='service' className='serivces-titel my-5'>Our Serivces</h1>
            <div className='serivces-container'>
            {
                serivces.map(serivce=> <Serivce key={serivce.id} serivce={serivce}></Serivce>)
            }
            </div>
        </div>
    );
};

export default Serivces;