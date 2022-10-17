import React from 'react';
import { FaStar,FaStarHalfAlt ,FaRegStar } from 'react-icons/fa';

//Redering the star rating
function Rating(props) {
    // console.log(props)

    if(props.rate >= 4.5) {
        return ( 
                <div>
                    <FaStar className='rating'/> 
                    <FaStar className='rating'/> 
                    <FaStar className='rating'/> 
                    <FaStar className='rating'/> 
                    <FaStarHalfAlt className='rating'/>
                </div>
            );
    } else if (props.rate >= 4.0 && props.rate <= 4.4) {
        return( 
                <div> 
                    <FaStar className='rating'/> 
                    <FaStar className='rating'/> 
                    <FaStar className='rating'/> 
                    <FaStar className='rating'/>
                    <FaRegStar className='rating'/>
                </div>
            );
    } else {
        return( <div> 
                    <FaStar className='rating'/> 
                    <FaStar className='rating'/> 
                    <FaStar className='rating'/> 
                    <FaStarHalfAlt className='rating'/> 
                    <FaRegStar className='rating'/>
                </div>
        );
    }
};

export default Rating;