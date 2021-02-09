import './App.css';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
    <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals}/>
    <Row  title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row  title="TopRated Movies" fetchUrl={requests.fetchTopRatedMovies}/>
    <Row  title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row  title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row  title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row  title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row  title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>


    </div>
  );
}

export default App;

//412359760123a0a2605cb80010aa2ba0