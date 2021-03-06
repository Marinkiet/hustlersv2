import React from "react";
import './form-input.styles.scss'

const FormInput = ({handleChange,label, ...otherProps}) =>(
    <div className="group">
    <input className="form-input"
    onChange={handleChange}
    {...otherProps}/>
    {/*why label prop? not sure if we'll selectively need it or not*/}
    {
        label ? //if we pass one then null
        
        //adding shrink class if anyting typed in else keep to form-input-label
        (<label className={`${
            otherProps.value.length? 'shrink':''
         } form-input-label`}>
         {label}
        
        </label>)
        :null
    }
 
    </div>

);

export default FormInput;