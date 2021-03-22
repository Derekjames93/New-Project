import { Switch } from 'react-router';
import {Route} from 'react-router-dom'
import './App.css';
import About from './Components/About Us/About';
import Home from './Components/Home Page/Home';



function App() {
  return (
    <>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
      </Switch>
    
    </>
  );
}

export default App;
