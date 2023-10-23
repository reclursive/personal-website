
import './App.css';
import Experience from './components/Experience';
import Header from './components/Header'
import Introduction from './components/Introduction';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Introduction/>
      <Experience/>
      <Projects/>
    </div>
  );
}
//test
export default App;
