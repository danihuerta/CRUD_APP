import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import CardsList from "./components/CardsList";
import Hero from "./components/Hero";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CardsList />
    </div>
  );
}

export default App;
