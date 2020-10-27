import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './Profile.css';

const Profile = (props) => {
    const {name,Title,instructor,img,price}=props.course
    const handleAddProduct=props.handleAddProduct
    return (
        <div className='Profile'>
            <div className='img-holder col-3'>
                <img src={img} alt=""/>
            </div>
            <div className='text col-9'>
                <h3>{name}</h3>
                <h5>{Title}</h5>
                <p style={{color: '#212529'}}>{instructor}</p>
                <h2>${price}</h2>
                <button className='btn btn-success' onClick={() => handleAddProduct(props.course)}><FontAwesomeIcon icon={faPlus} /> Enroll Now</button>
            </div>
            
        </div>
    );
};

export default Profile;