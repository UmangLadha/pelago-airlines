import "./App.css";
import { Header, Tourplaces, Explore, Review } from "./components";
import { Navbar, Suggestion, Footer } from "./common";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Suggestion />
      <Tourplaces />
      <Explore />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
