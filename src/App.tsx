import { useState } from "react";
import "./App.css";

interface Task {
  id: number;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    const newTask: Task = {
      id: Math.floor(Math.random() * 100) + 1,
      title,
      description,
    };

    setTasks((prev) => [...prev, newTask]);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="container">
      <h1 className="title-list">Lista de Tareas</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />

        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
        />

        <button type="submit">Guardar</button>
      </form>

      <div className="list">
        {tasks.length === 0 ? (
          <p className="title-list">No hay tareas aún</p>
        ) : (
          tasks.map((task, index) => (
            <div key={index} className="task">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
