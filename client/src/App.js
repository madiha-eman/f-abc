import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Patient Management System</h1>
      <Main/>
     
      {/* <Switch>
        <Route path="/">
          <Main/>
          </Route>
          </Switch> */}
         
    </div>
    </Router>
  );
}

export default App;
