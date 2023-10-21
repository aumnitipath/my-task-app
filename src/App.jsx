import { useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  const [task, setTask] = useState([
    { id: 1, title: "Fix Bug" },
    { id: 2, title: "Study" },
  ]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  const deleteTask = (id) => {
    const result = task.filter((item) => {
      return item.id !== id;
    });
    setTask(result);
  };

  const editTask = (id) => {
    setEditId(id);
    const result = task.find((item) => item.id === id);
    setTitle(result.title);
  };

  const saveTask = (e) => {
    e.preventDefault();
    if (!title) {
      // คือ if(title === "")
      alert("กรุณาป้อนข้อมูล");
    } else if (editId) {
      //คือ if(editId !== null)
      // update ข้อมูล
      const updateTask = task.map((item) => {
        //รายการใดมีรหัสตรงกับรหัสแก้ไข
        if (item.id === editId) {
          //ให้คงสภาพเดิมและให้ไปเปลี่ยนแปลง state title
          return { ...item, title: title };
        }
        return item;
      });
      setTask(updateTask);
      setEditId(null);
      setTitle("");
    } else {
      //เพิ่มรายการใหม่
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title,
      };
      setTask([...task, newTask]);
      setTitle("");
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          editId={editId}
        />
        <section>
          {task.map((item) => {
            return (
              <Item
                key={item.id}
                data={item}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
