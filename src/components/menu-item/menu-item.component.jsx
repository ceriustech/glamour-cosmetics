import React from 'react';
import { withRouter } from 'react-router-dom'; 

import './menu-item.styles.scss';

const MenuItem = (props) => (
    <div className={`${props.size} menu-item`} onClick={() => history.push()}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${props.imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{props.title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );

export default withRouter(MenuItem); 