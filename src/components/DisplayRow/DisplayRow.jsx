import React from 'react'
import styles from './DisplayRow.module.css'
import SlideShow from '../SlideShow/slideShow'
// import { movies } from '../../data/data'
import MovieInstance from '../../Utility/MovieInstance'
import Requests from '../../Utility/Requests'

const DisplayRow = () => {

    const [movies, setMovies] = useState({
        trending :[],
        netflixOriginals:[],
        topRated:[],
        action :[],
        comedy :[],
        horror :[],
        romance :[],
        documentaries :[]
    })

    UseEffect(() => {
        fetchMovies();
    }, [])
    console.log(movies)
const fetchMovies = async () => {  
    try {
        const {trendingResponse, netflixOriginalsResponse, topRatedResponse, actionResponse, comedyResponse, horrorResponse, romanceResponse, documentariesResponse} = await Promise.all([
            MovieInstance.get(Requests.fetchTrending),
            MovieInstance.get(Requests.fetchNetflixOriginals),
            MovieInstance.get(Requests.fetchTopRated),
            MovieInstance.get(Requests.fetchAction),
            MovieInstance.get(Requests.fetchComedy),
            MovieInstance.get(Requests.fetchHorror),
            MovieInstance.get(Requests.fetchRomance),
            MovieInstance.get(Requests.fetchDocumentaries)
        ]);
        setMovies({
            trending: trendingResponse.data.results,
            netflixOriginals: netflixOriginalsResponse.data.results,
            topRated: topRatedResponse.data.results,
            action: actionResponse.data.results,
            comedy: comedyResponse.data.results,    
        horror: horrorResponse.data.results,
        romance: romanceResponse.data.results,
        documentaries: documentariesResponse.data.results
           
        });
    }
    catch (error) { 
        Console.error('Error fetching movies:', error);

    }
}






  return (
    <div className={styles.mainWrapper}> 

        <SlideShow title="Netflix Trending" movie={movies.trending} />
        <SlideShow title="Netflix Originals" movie={movies.netflixOriginals} />
        <SlideShow title="Top Rated" movie={movies.topRated} />
        <SlideShow title="Action" movie={movies.action} />
        <SlideShow title="Comedy" movie={movies.comedy} />
        <SlideShow title="Horror" movie={movies.horror} />
        <SlideShow title="Romance" movie={movies.romance} />
        <SlideShow title="Documentaries" movie={movies.documentaries} />
      
    </div>
  )
}

export default DisplayRow
