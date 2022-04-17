const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema(
  {
    todoName: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    endDate: {
      type: Date,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = mongoose.model("Todos", TodosSchema);
