import { useState,useEffect } from 'react'
import MovieCard from './components/MovieCard';
import Loader from './components/Loader';

function App() {
  const [movies,setmovies] = useState([]);
  const [search,setSearch] = useState('Iron Man');
  const [error,setError] = useState('');
  const [isPending,setisPending] = useState(true);
  const API_KEY = import.meta.env.VITE_API_KEY;

 const API_URL = 'https://www.omdbapi.com/?apikey=API_KEY';

 const searchMovies = async (title:string) => {
  setisPending(true);
  if(title.length > 0){
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setError(data.Response);
    setmovies(data.Search);
    setisPending(false);
  }else{
    setError('False');
  
  }
 }


 useEffect(()=>{
  searchMovies(search);
 },[]);
  
  return (
    <>
    <div className='container'>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">XELL Movie Hub</h1>
            <div className="input-group mb-3">
              <button onClick={()=>{searchMovies(search)}} className="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
              <input onChange={(e)=>{setSearch(e.target.value)}} type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            </div>
          </div>
        </div>
      </section>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        {error !='False' ? movies.map((movie)=>(
           isPending ? <Loader/> : <MovieCard movie={movie}/>
        )) : 
          <div className="col-lg-6 col-md-8 mx-auto" role="alert">
            <p className="card-text mt-4">No Result Found For Search: {search}</p>
          </div>
        }
      </div>
    </div>
  </>
  )
}

export default App
