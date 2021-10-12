import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Experts from "./Pages/Experts/Experts";
import Header from "./SharedComponents/Header/Header";
import Footer from "./SharedComponents/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                    <Route path="/experts">
                        <Experts />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
