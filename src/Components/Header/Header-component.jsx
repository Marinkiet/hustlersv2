import React from 'react';
import './Header-styles.css';
import SHOP_DATA from "./shop.data";
import Searchbar from '../Search/Search-component';
import CollectionPreview from '../collection-preview/collection-preview-componenet';
class HeaderComponent extends React.Component{
  constructor(props){
  super(props);

      this.state ={
          collections:SHOP_DATA
      };

  }
  render(){
      
      const {collections} = this.state;

      return(
      <div className="shopPage">
      <Searchbar/>
      {
      collections.map(({id,...otherCollections})=>(
          <CollectionPreview 
          key={id}
          {...otherCollections}
         />
      ))
      }
      </div>
      
      )
  }
}

export default HeaderComponent;
