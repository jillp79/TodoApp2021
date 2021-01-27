import './App.css';
import Nav from "./Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import About from "./About/About";
import Todos from "./Todos/Todos";
import Contact from "./Contacts/Contact";
import logo from './RedThicketlogo.png';

function App() {
    return (
        <Router>
            <Nav />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/todos">
                    <Todos />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

