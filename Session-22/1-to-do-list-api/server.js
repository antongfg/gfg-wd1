const express = require("express");
const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "todos.json");

const app = express();

app.use(express.json());

const readToDos = () => {
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
};

const writeToDos = (todos) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos));
};

app.get("/todos", (req, res) => {
  const todos = readToDos();
  return res.json(todos);
});

app.post("/todos", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }
  const todos = readToDos();
  const newTodo = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    task,
    done: false,
  };
  todos.push(newTodo);
  writeToDos(todos);
  return res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const { task, done } = req.body;

  const todos = readToDos();
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  if (task !== undefined) {
    todos[index].task = task;
  }

  if (done !== undefined) {
    todos[index].done = done;
  }

  writeToDos(todos);
  return res.json(todos[index]);
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  let todos = readToDos();

  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos.splice(index, 1);
  writeToDos(todos);

  return res.json({ msg: "Todo deleted" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(3003, () => {
  console.log("Server is up and running");
});
