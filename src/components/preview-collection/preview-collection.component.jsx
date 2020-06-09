import React from 'react';

import './preview-collection.styles.scss'; 


const CollectionPreview = (props) => (
    <div className='collection-preview'>
        <h1 className='title'>{props.title.toUpperCase()}</h1>
        <div className='preview'>
            {props.items.map((item) =>  (
            <div key={item.id}>{item.name}</div>
            ))}
        </div>
    </div>
)
   


export default CollectionPreview;