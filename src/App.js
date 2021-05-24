
import './App.css';
import Appbar from './components/layout/Appbar'
import Home from "./pages/Home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import ClassState from "./components/context/information/classState"
function App() {
  return (
    <div className="App">
      <ClassState>
        {" "}
        <Router>
          <Appbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </ClassState>
    </div>
  );
}

export default App;
