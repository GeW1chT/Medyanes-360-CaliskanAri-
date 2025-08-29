import mongoose from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL?.replace(/"/g, '');

if (!mongoose.connection.readyState) {
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
}

const todoSchema = new mongoose.Schema({
  text: String,
}, { timestamps: true });

const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } else if (req.method === 'POST') {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Text gerekli' });
    const newTodo = await Todo.create({ text });
    res.status(201).json(newTodo);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}