import React from 'react';


import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Experts from '../Experts/Experts';

const experts = [
    {id: 1, name: 'Will Smith', img: expert1},
    {id: 1, name: 'Mir Hasad', img: expert2},
    {id: 3, name: 'Miv Messiy', img: expert3},
    {id: 4, name: 'Miss Namys', img: expert4},
    {id: 5, name: 'Md Abir', img: expert5},
    {id: 6, name: 'Smg Shuvo', img: expert6},
]

const Expert = () => {
    return (
        <div className='container'>
            <h2 id='experts' className='text-center my-5 serivces-titel'>Experts</h2>
            <div className="row">
                {
                    experts.map(experts=> <Experts key={experts.id} experts={experts}></Experts>)
                }
            </div>
        </div>
    );
};

export default Expert;