"use client";

import { useState, useEffect } from "react";

export default function Home() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        // Simulated data instead of API call for initial deployment
        setTodos([
            { id: '1', text: 'Learn Next.js', completed: false },
            { id: '2', text: 'Build a todo app', completed: false },
            { id: '3', text: 'Deploy to production', completed: false }
        ]);
    }, []);

    const addTodo = async (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        // Create a new todo with a unique ID
        const newTodo = {
            id: Date.now().toString(),
            text: text.trim(),
            completed: false
        };

        setTodos([...todos, newTodo]);
        setText("");
    };

    const deleteTodo = async (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Todo List
                </h1>

                <form onSubmit={addTodo} className="mb-6">
                    <div className="flex gap-2">
                        <input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Yeni todo yazın..."
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md"
                        >
                            Ekle
                        </button>
                    </div>
                </form>

                <ul className="space-y-2">
                    {todos.map((todo) => (
                        <li key={todo.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <span>{todo.text}</span>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="px-3 py-1 bg-red-500 text-white rounded-md text-sm"
                            >
                                Sil
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}