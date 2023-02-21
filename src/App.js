import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comic";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";
import ListLastEvents from "./components/ListLastEvents/ListLastEvents";

function App() {

  const exampleApi = useFetch(
    "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=8af5aee3c60b89c0b15d53b5d58abdd8&hash=014eca8c76847a2dbd331cd431420902"
    );

  console.log(exampleApi);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" exact element={<Home />} />
          <Route path="/series" exact element={<Series />} />
          <Route path="/comics" exact element={<Comics />} />
          <Route element={<Error404 />} />
        </Routes>
      </Router>
      {/* <ListLastEvents>  </ListLastEvents> */}
    </div>
  );
}

export default App;
