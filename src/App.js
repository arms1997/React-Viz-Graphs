import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Graph Import
import Graph from "./components/Graph";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/lineWithBubble">
            <Graph lineWithBubble />
          </Route>
          <Route path="/lineWithDynamicBubble">
            <Graph lineWithDynamicBubble />
          </Route>
          <Route path="/">
            <Graph lineWithBubble />
            <Graph lineWithDynamicBubble />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
