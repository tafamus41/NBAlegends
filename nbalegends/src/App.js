import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardContainer from './components/CardContainer';
import {data} from "./helper/data"


function App() {
  return (
    <div className="App">
      <Header/>
      <CardContainer nbaplayers={data}/>
    </div>
  );
}

export default App;
