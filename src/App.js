import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import TablePage from "./pages/TablePage";
import HomePage from "./pages/HomePage";
import ContactPage from './pages/ContactPage/ContactPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/market" component={TablePage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
