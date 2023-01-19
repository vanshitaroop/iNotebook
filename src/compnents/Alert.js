import React from 'react'

export default function Alert(props) {
    const capatilize = (word)=>{
      if(word==="danger"){
        word="error"
      }
        const lower = word.toLowerCase();
        const res = lower.charAt(0).toUpperCase() + lower.substring(1);
        console.log(res);
        return res;
        
      }
  return (
    props.alert && <div className={`alert alert-${props.alert.type}  fade show` }role="alert">
    <strong>{capatilize(props.alert.type)}</strong>: {props.alert.msg}
    
  </div>
  )
}