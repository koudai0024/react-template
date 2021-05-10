import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "src/pages/Home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div id="app">
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  </div>,
  rootElement
);
