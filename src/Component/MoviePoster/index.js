import React from 'react';
import './styleCards.css';
import MainRoute from '../../route/Route';
import Icons from '../Icon';

const TruncateText =(value)=>{
    return(
       value.slice(0,10)
    )
}
const StarPrint=(value)=>{

    const arr = [];
        for(let i=0;i<=value/2;i++) {
        arr.push(<Icons name="fas fa-star"/>)
    }

    return arr;
}
const MoviePoster =(props)=>{
    return(
        <div onClick={()=>{props.onClick(props.id)}} className="poster-container">
            <img className="poster-img" src={props.url}/>
            <div className="poster-content">
                <div className="poster-details">
                    <div className="name">{TruncateText(props.title)}...</div>
                    <div>{props.vote_average}<Icons name="far fa-thumbs-up"/></div>
                    
                </div>
                <div className='star'>{StarPrint(props.vote_average)}</div>

            </div>
        </div>
    )
}

export default MoviePoster;