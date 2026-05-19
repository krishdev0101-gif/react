import React from 'react'

const Card = (props) => {

    // console.log(props.user, props.age);
    
    return (
        <div className="card">
            <img src="https://plus.unsplash.com/premium_photo-1712736395790-dafc5a950401?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1>{props.user}, {props.age}</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>View Profile</button>
        </div>
    )
}

export default Card