import './App.css';
import Appbar from './Components/Appbar';
import Review from "./Components/Review";
import {Auth0Provider} from "@auth0/auth0-react";
import {BrowserRouter, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Auth0Provider
            domain="dev-rs3-uvy1.eu.auth0.com"
            clientId="kBG2PmCMra4v0wSq1aaiuMiPzykF0Sel"
            redirectUri={window.location.origin}>
      <Appbar/>
        <Review></Review>
        </Auth0Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
