import React from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../../actionCreator/Movies';
import MoviePoster from '../../Component/MoviePoster';
import './styleHome.css';
class Home extends React.Component{
    componentDidMount =()=>{
        this.props.fetchMovieList();
    }
    handleClick = (id)=>{
        this.props.history.push("/details/"+id)
    }
    render(){   
        return(
            <div className="home-container">
            {  
                this.props.movies.map((movie)=>{
                    return(
                        <MoviePoster url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title={movie.title} vote_average={movie.vote_average} id={movie.id} onClick={this.handleClick}/>
                    )
                })   
            }
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch)=> {
    return{
        fetchMovieList:()=>dispatch(fetchMovies())
    }
}
const mapStoreToProps=(store)=>{
    return{movies:store.movies}
}
export default connect(mapStoreToProps,mapDispatchToProps) (Home);