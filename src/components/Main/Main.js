// eslint-disable-next-line no-unused-vars
import React, { useImperativeHandle } from 'react';
import Profile from '../Profile/Profile';
import Cart from '../Cart/Cart';
import MainData from '../MainData';
import {useState,useEffect} from 'react';
import './Main.css';

const Main = () => {
    const[courses,setCourses]=useState([])
    const[product,setProduct]=useState([])
    useEffect(() =>{
        setCourses(MainData)
        console.log(MainData)
    },[])
    const handleAddProduct=(course) =>{
        const newCourse=[...product,course]
        setProduct(newCourse)
    }
    return (
        <div className="body">
            <div className="col-9">
                <div className='row'>
                    <h1>Our Courses</h1>
                    <div className='product-container'>
                        <ul>
                            {
                                courses.map(course => <Profile course={course} handleAddProduct={handleAddProduct} key={course.key}></Profile>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-3 new">
                <Cart product={product}></Cart>
            </div>
        </div>
    );
};

export default Main;