import { useEffect, useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id) => {
    const result = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(result);
  };

  const editTask = (id) => {
    setEditId(id);
    const result = tasks.find((item) => item.id === id);
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
      const updateTask = tasks.map((item) => {
        //รายการใดมีรหัสตรงกับรหัสแก้ไข
        if (item.id === editId) {
          //ให้คงสภาพเดิมและให้ไปเปลี่ยนแปลง state title
          return { ...item, title: title };
        }
        return item;
      });
      setTasks(updateTask);
      setEditId(null);
      setTitle("");
    } else {
      //เพิ่มรายการใหม่
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  };

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          editId={editId}
        />
        <section>
          {tasks.map((item) => {
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
