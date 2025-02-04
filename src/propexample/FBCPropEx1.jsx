import React from 'react'

const FBCPropEx1 = (props) => {
    if(props.isLoggedIn == true){
        return(
            <h1>Welcome {props.username}</h1>

        )
    }else{
        return <h1>Please Login First!</h1>
    }
}