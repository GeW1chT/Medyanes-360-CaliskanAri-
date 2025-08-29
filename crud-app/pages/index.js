import { useState, useEffect } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // Sayfa açıldığında API'den verileri çek
  useEffect(() => {
    fetch("/api/todo")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  // Yeni todo ekle
  const addTodo = async (e) => {
    e.preventDefault();
    if (!text) return;

    const res = await fetch("/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
    setText("");
  };

  // Todo sil
  const deleteTodo = async (id) => {
    await fetch(`/api/todo/${id}`, { method: "DELETE" });
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
      <h1>Todo List</h1>

      <form onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Yeni todo..."
        />
        <button type="submit">Ekle</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo._id} style={{ margin: "10px 0" }}>
            {todo.text}
            <button
              style={{ marginLeft: "10px", color: "red" }}
              onClick={() => deleteTodo(todo._id)}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
