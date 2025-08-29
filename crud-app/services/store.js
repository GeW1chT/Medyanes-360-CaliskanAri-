import { create } from 'zustand';
import { getTodos, createTodo } from './todoService';

export const useTodoStore = create((set) => ({
  todos: [],
  
  fetchTodos: async () => {
    const data = await getTodos();
    set({ todos: data });
  },

  addTodo: async (title, description) => {
    const newTodo = await createTodo({ title, description });
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },
}));
