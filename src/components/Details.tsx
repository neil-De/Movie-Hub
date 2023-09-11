import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Details() {
  //   const detail = {
  //     Title: "The Invincible Iron Man",
  //     Year: "2007",
  //     Rated: "PG-13",
  //     Released: "23 Jan 2007",
  //     Runtime: "83 min",
  //     Genre: "Animation, Action, Adventure, Fantasy, Sci-Fi",
  //     Director: "Patrick Archibald, Jay Oliva, Frank Paur",
  //     Writer:
  //       "Avi Arad (story), Greg Johnson (story), Craig Kyle (story), Greg Johnson (screenplay), Stan Lee (comic book), Don Heck (comic book), Larry Lieber (comic book), Jack Kirby (comic book)",
  //     Actors: "Marc Worden, Gwendoline Yeo, Fred Tatasciore, Rodney Saulsberry",
  //     Plot: 'Billionaire inventor Tony Stark digs up far more than he bargained for. He unleashes an age-old prophecy that foretells the resurrection of the Mandarin, the emperor of China\'s darkest and most violent dynasty. When his best friend James "Rhodey" Rhodes has been kidnapped, Tony travels to China to investigate, he is captured and badly injured by the Jade Dragons, his life only saved thanks to a Chinese shaman and Rhodes\' skills as an army medic after a piece of shrapnel damages his heart. In order to confront the destructive force in this ultimate battle, Tony creates an armored suit infused with high-tech weaponry. To stop the evil that he himself has raised form the earth, Tony must become his greatest invention ever which becomes known as "Iron Man"! The newly born champion must travel to the four corners of the earth to battle the Mandarin\'s henchmen, the Elementals four magical warriors who harness the power of the elements earth, water, wind, and fire with deadly chemistry.',
  //     Language: "English",
  //     Country: "USA",
  //     Awards: "2 nominations.",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BOGRmZDg1YjMtMDA5YS00OTFjLTgyMjQtNDgzNTIyNzAwZDg0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  //     Ratings: [{ Source: "Internet Movie Database", Value: "5.9/10" }],
  //     Metascore: "N/A",
  //     imdbRating: "5.9",
  //     imdbVotes: "6,993",
  //     imdbID: "tt0903135",
  //     Type: "movie",
  //     DVD: "06 Oct 2016",
  //     BoxOffice: "N/A",
  //     Production: "N/A",
  //     Website: "N/A",
  //     Response: "True",
  //   };

  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;
  const [detail, setDetail] = useState<any>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}&i=${id}&plot=full`)
      .then(function (response) {
        console.log(response);
        setDetail(response.data);
      })
      .catch(function (error) {
        setError(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <Link to="/" className="btn btn-primary">
          Back To Home
        </Link>
        <hr />
        {error.length == 0 ? (
          <div className="row">
            <div className="col-12 col-md-5">
              <figure className="figure shadow p-3 mb-5 bg-body rounded">
                <img
                  src={detail.Poster}
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
                <figcaption className="figure-caption">
                  <strong> Rated: {detail.Rated}</strong>
                </figcaption>
              </figure>
            </div>
            <div className="col-6 col-md-6">
              <div className="">{detail.Plot}</div>
              <hr />
              <p className="col-md-6 d-inline-block">
                Released: {detail.Released}
              </p>
              <p className=" col-md-6 d-inline-block">
                Runtime: {detail.Runtime}
              </p>
              <p className="col-md-6 d-inline-block">Genre: {detail.Genre}</p>
              <p className="col-md-6 d-inline-block">
                Director: {detail.Director}
              </p>
              <p className="col-md-12 d-inline-block">
                Writer: {detail.Writer}
              </p>
              <p className="col-md-12 d-inline-block">
                Actors: {detail.Actors}
              </p>
              <p className="col-md-6 d-inline-block">
                Language: {detail.Language}
              </p>
              <p className="col-md-6 d-inline-block">
                Rating: {detail.imdbRating}
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Details;
