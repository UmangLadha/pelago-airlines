import './App.css';
import { Header, Tourplaces } from './components';
import { Suggestion, Navbar } from './common';

function App() {
  return (
    <div className="App">
     <Navbar/>
	 <Header/>
	 <Suggestion/>
	 <Tourplaces/>
    </div>
  );
}

export default App;
