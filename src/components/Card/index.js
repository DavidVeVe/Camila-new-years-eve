import React from 'react'

function Card ({cardContent, onClick, isActive, wishNumber, setIsCardActive}) {

    const {title, text} = cardContent

    return (<div className={`card${isActive ? ' card--isActive': ''}`} onClick={onClick} >
        {!isActive && <p>{wishNumber}</p>}
        {isActive && <>
            <span className="card--wishnumber">{wishNumber}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <button onClick={setIsCardActive}>close</button></> }
    </div>)
}

export default Card
