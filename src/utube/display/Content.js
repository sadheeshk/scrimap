import React from "react"

function Content(props) {
    //console.log(props)
    return (
        <div className="Content-card">
            <img src={props.content.imgUrl}/>
            <h5>{props.content.name}</h5>
            <p>Average Rating: {props.content.phone}</p>
            <p>Released on: </p><p>{props.content.email}</p>
        </div>
    )
}

export default Content
