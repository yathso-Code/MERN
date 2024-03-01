import React, { useContext } from 'react';
import './Services.css';
import { ThemeContext } from '../App';

const Services = () => {
  const { serData } = useContext(ThemeContext);

  return (
    <div className='main_service_box'>
      <div className='service_box'>
        {serData?.map((curElm, ind) => (

          <div className="card" key={ind}>
            <div className='img_box'>
              <img src='' alt='' />
            </div>
            <div className='text_box'>
              <p className='course'>{curElm.service}</p>
              <h4 className='der'>{curElm.descriptipn}</h4>
              <p className='price'>{`${curElm.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
