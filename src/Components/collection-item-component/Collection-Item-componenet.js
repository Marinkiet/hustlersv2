import React from 'react';
import './collection-item-styles.css';


const CollectionItem =({id,name,price,imageUrl,likeCount,comment})=>(
   
    <div className='collection-item'>
    <div className='collection-footer'>

    <span className='name'>{name}</span>
    <span className='price'>{'From R' + price}</span>
    </div>
        <div className='image'
        style={{
            backgroundImage:`url(${imageUrl})`
            
        }}/>
        <div className='collection-footer'>
            <span className='price'>{likeCount + ' Likes'}</span>
            <span className='price'>{comment}</span>

        </div>
    </div>
);
export default CollectionItem;