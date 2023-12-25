import React from 'react'

export default function Alert(props) {
    const cap =(word)=>{
        const lower = word.toLowerCase();
        return lower.chart(0).toUpperCase()+lower.slice(1);
    }
  return (
    
   
    props.alert &&<div className={`alert alert-$cap({props.alert.msg}) alert-dismissible fade show`} role="alert">
    <strong>{props.alert.msg}</strong>:{props.alert.type}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
    
  )
}
