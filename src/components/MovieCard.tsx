import { Link } from "react-router-dom";

interface Props {
  movie: any;
}

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
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={`/details/${movie.imdbID}`} className="btn btn-primary">
            view
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
