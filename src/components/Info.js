import React from 'react';
const Info = () => {
    return(
        
        <div className='card' style={{
        position: 'absolute',
        top: '65%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }} >
      <div className='card-header text-center'>
        <h5>We are here</h5>
        <p>12459, Berlin</p>
        <a href = 'https://www.google.com/maps/place/WBS+CODING+SCHOOL+Hybrid+Coding+Bootcamp/@52.4571306,13.5378842,17z/data=!3m1!4b1!4m5!3m4!1s0x47a845aaa1e6aaf5:0x4a9c655f0b058b03!8m2!3d52.4571306!4d13.5400729'>Open in maps</a>
      </div>
      </div>
    );
}
export default Info;