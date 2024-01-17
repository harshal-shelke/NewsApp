import React, {  } from 'react'
import loading from './loading.gif'


const Spinner =()=> {
    return (
      <div className="container">
      <div className="row">
        <div className="span4"></div>
        <div className="span4"><img className="center-block" src={loading} alt='hello' /></div>
        <div className="span4"></div>
      </div>
    </div>
    )
}

export default Spinner;