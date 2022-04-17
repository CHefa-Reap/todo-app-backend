const Todos = require("../models/Todos");

exports.getTodos = async (req, res, next) => {
  const todos = await Todos.find();
  res.status(200).json({ sucess: true, data: todos, msg: "SHOW ALL" });
};

exports.createTodos = async (req, res, next) => {
  const addTodo = await Todos.create(req.body);
  res.status(200).json({
    sucess: true,
    data: addTodo,
  });
};

exports.updateTodos = async (req, res, next) => {
  const updateTodo = await Todos.findByIdAndUpdate(req.params.id, req.body);
  if (!updateTodo) {
    return res.status(400).json({ sucess: false });
  }

  res.status(200).json({ sucess: true, data: updateTodo });
};

exports.deleteTodos = async (req, res, next) => {
  const todo = await Todos.findByIdAndDelete(req.params.id);
  if (!todo) {
    return res.status(400).json({ sucess: false });
  }

  res.status(200).json({ sucess: true, data: {} });
};
