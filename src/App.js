
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <About></About>
    </div>
  );
}

export default App;
