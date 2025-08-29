export const getTodos = async () => {
  const res = await fetch('/api/todo');
  return res.json();
};

export const createTodo = async (data) => {
  const res = await fetch('/api/todo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteTodo = async (id) => {
  const res = await fetch(`/api/todo/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
