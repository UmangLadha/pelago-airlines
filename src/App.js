import './App.css';
import { Header, Tourplaces, Explore, Review } from './components';
import { Suggestion, Navbar } from './common';

function App() {
  return (
    <div className="App">
     <Navbar/>
	 <Header/>
	 <Suggestion/>
	 <Tourplaces/>
	 <Explore/>
	 <Review/>
    </div>
  );
}

export default App;
