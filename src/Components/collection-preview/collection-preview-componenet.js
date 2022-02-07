import React from "react";
import './collection-preview-styles.css'
import CollectionItem from "../collection-item-component/Collection-Item-componenet"; 
import { Link } from "react-router-dom";

const CollectionPreview =({title,items})=>(
  <div className="collection-preview">
    <Link to={`${title}` + 'Page'}className="title">{title.toUpperCase()}</Link>
    <div className="preview">
    {items
    
    .map(({id, ...otherItemProps})=>(
      <CollectionItem key={id}{...otherItemProps}/>

    ))
    }
    </div>
  </div>
)
export default CollectionPreview;

