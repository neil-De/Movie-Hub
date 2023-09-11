import { Link } from "react-router-dom";

interface Props {
  movie: any;
}
const olok = {
  Title: "Lauf um Dein Leben - Vom Junkie zum Ironman",
  Year: "2008",
  Rated: "N/A",
  Released: "24 Apr 2008",
  Runtime: "96 min",
  Genre: "Biography, Drama, Sport",
  Director: "Adnan Köse",
  Writer: "Fritjof Hohagen, Adnan Köse",
  Actors: "Max Riemelt, Jasmin Schwiers, Uwe Ochsenknecht",
  Plot: "He lived the junkie's life as a heroin addict. Triathlon transformed him. Biopic of the record breaking Ironman Andreas Niedrig.",
  Language: "German",
  Country: "Germany",
  Awards: "N/A",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMDJhZjA5MWEtOTE5Yy00MWJiLTgwNjQtMDliOWI0NWJmZDZkXkEyXkFqcGdeQXVyMjY1ODY2Ng@@._V1_SX300.jpg",
  Ratings: [{ Source: "Internet Movie Database", Value: "5.9/10" }],
  Metascore: "N/A",
  imdbRating: "5.9",
  imdbVotes: "257",
  imdbID: "tt0954542",
  Type: "movie",
  DVD: "N/A",
  BoxOffice: "N/A",
  Production: "StudioCanal",
  Website: "N/A",
  Response: "True",
};

const MovieCard = ({ movie }: Props) => {
  return (
    <>
      <div className="card m-3 p-0" style={{ width: "25rem" }}>
        <img
          height={254}
          src={
            movie.Poster != "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          className="card-img-top"
          alt={movie.Title}
        />
        <div className="card-body">
          <h5 className="card-title">Title: {movie.Title}</h5>
          <p className="card-text"></p>
          <p className="card-text">Released: {movie.Year}</p>
          <p className="card-text">Type: {movie.Type}</p>
          <hr />
          <Link to={`/details/${movie.imdbID}`} className="btn btn-primary">
            view
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
