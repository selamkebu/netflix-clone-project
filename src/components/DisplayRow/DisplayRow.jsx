
import { useState, useEffect } from "react";
import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
// import { movies } from '../../data/data'
import {MovieInstance} from "../../Utility/MovieInstance";
import requests from "../../Utility/RequestUrls";

const DisplayRow = () => {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  useEffect(() => {
    fetchMovies();
  }, []);
 
  const fetchMovies = async () => {
    try {
      const [
        trendingResponse,
        netflixOriginalsResponse,
        topRatedResponse,
        actionResponse,
        comedyResponse,
        horrorResponse,
        romanceResponse,
        documentariesResponse,
      ] = await Promise.all([
        MovieInstance.get(requests.fetchTrending),
        MovieInstance.get(requests.fetchNetflixOriginals),
        MovieInstance.get(requests.fetchTopRatedMovies),
        MovieInstance.get(requests.fetchActionMovies),
        MovieInstance.get(requests.fetchComedyMovies),
        MovieInstance.get(requests.fetchHorrorMovies),
        MovieInstance.get(requests.fetchRomanceMovies),
        MovieInstance.get(requests.fetchDocumentaries),
      ]);
      setMovies({
        trending: trendingResponse.data.results,
        netflixOriginals: netflixOriginalsResponse.data.results,
        topRated: topRatedResponse.data.results,
        action: actionResponse.data.results,
        comedy: comedyResponse.data.results,
        horror: horrorResponse.data.results,
        romance: romanceResponse.data.results,
        documentaries: documentariesResponse.data.results,
      });
    } catch (error) {
      console.log("something wrong",error);
    }
  };
 console.log(movies);
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
  );
};

export default DisplayRow;
