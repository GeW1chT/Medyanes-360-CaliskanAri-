import { create } from 'zustand';
import { getTodos, createTodo, deleteTodo } from './todoService';

export const useTodoStore = create((set) => ({
  todos: [],
  
  fetchTodos: async () => {
    const data = await getTodos();
    set({ todos: data });
  },

  addTodo: async (text) => {
    const newTodo = await createTodo({ text });
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },

  removeTodo: async (id) => {
    await deleteTodo(id);
    set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) }));
  }
}));
