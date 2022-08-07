import Top from "./Component/Top/Top";
import About from "./Component/About/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="top__section">
        <Top />
      </section>
      <section className="body__section">
        <About></About>
      </section>
    </div>
  );
}

export default App;
