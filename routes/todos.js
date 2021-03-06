const express = require("express");
const router = express.Router();

const {
  getTodos,
  createTodos,
  deleteTodos,
  updateTodos,
} = require("../controllers/todos");

router.route("/").get(getTodos).post(createTodos);

router.route("/:id").delete(deleteTodos).put(updateTodos);
module.exports = router;
