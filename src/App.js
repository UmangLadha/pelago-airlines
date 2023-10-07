import './App.css';
import { Header } from './components';
import { Suggestion, Navbar } from './common';

function App() {
  return (
    <div className="App">
     <Navbar/>
	 <Header/>
	 <Suggestion/>
    </div>
  );
}

export default App;
