import "./App.css";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddForm />
        <Item />
      </div>
    </div>
  );
}

export default App;
