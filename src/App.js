import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Products = () => <h1>Products</h1>;
const Contact = () => <h1>Contact</h1>;

const App = () => {
  return (
    <div className="App">
      <Router>
        <h1>Sample Shop</h1>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
