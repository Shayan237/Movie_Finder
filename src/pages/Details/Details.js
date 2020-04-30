import React from 'react';
import {connect} from 'react-redux';
import Icons from '../../Component/Icon';
import './styleDetails.css';

class Details extends React.Component{

    render(){ console.log(this.props.match.params.id)
        return(
                this.props.movies.map((movies)=>{
                    if(movies.id==this.props.match.params.id)
                    {
                        return(
                            <div className='main-page'>
                                <div className='heading'>{movies.title}</div>
                                <div className='content'>
                                    <div className='image-container'>
                                        <img className='image' src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}/>
                                    </div>
                                    <div className='details-container'>
                                        <div className='rating'>
                                            <div>{movies.vote_count}</div>
                                            <div  className='rate-icon'><Icons name="fas fa-poll"/></div>
                                            <div>{movies.vote_average}/10</div>
                                            <div className='star-icon'><Icons name="fas fa-star"/></div>
                                        </div>
                                        <div className='main-details'>
                                            <p>Popularity: {Math.trunc(movies.popularity)/10} %</p>
                                            <p>Release Date: {movies.release_date}</p>
                                            <p>Overview: </p>
                                            <p className='overview'>{movies.overview}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            )
        )
    }
}
const mapStoreToProps=(store)=>{
    return{movies:store.movies}
}
export default connect (mapStoreToProps,null) (Details);