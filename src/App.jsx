import { useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  const [task, setTask] = useState([
    { id: 1, title: "Fix Bug" },
    { id: 2, title: "Note" },
    { id: 3, title: "Study" },
  ]);

  const deleteTask = (id) => {
    const result = task.filter((item) => {
      return item.id !== id;
    });
    setTask(result);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddForm />
        <section>
          {task.map((item) => {
            return <Item key={item.id} data={item} deleteTask={deleteTask} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
