import React from 'react'
import './NewLatter.css'

function NewLatter() {
  return (
    <div className='newsletter'>
        <h1>GET Exclusive Ofeers On Your Email</h1>
        <p>Subscibe to our newlatter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id'/>
            <button>Subscibe</button>
        </div>
    </div>
  )
}

export default NewLatter