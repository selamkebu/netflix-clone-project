import React, { useState, useEffect } from "react";
import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
import { MovieInstance } from "../../Utility/MovieInstance";
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
      console.log("something wrong", error);
    }
  };
  console.log(movies);
  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Netflix Trending" movies={movies.trending} />
      <SlideShow title="Netflix Originals" movies={movies.netflixOriginals} />
      <SlideShow title="Top Rated" movies={movies.topRated} />
      <SlideShow title="Action" movies={movies.action} />
      <SlideShow title="Comedy" movies={movies.comedy} />
      <SlideShow title="Horror" movies={movies.horror} />
      <SlideShow title="Romance" movies={movies.romance} />
      <SlideShow title="Documentaries" movies={movies.documentaries} />
    </div>
  );
};

export default DisplayRow;
