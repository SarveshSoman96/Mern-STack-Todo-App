const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");
require("dotenv").config()

app.use(cors());
app.use(express.json());
mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@todocluster.pmiscq8.mongodb.net/DailyTodo?retryWrites=true&w=majority`, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to DB")).catch(err => console.log(err))

const TodoModel = require("./Models/TodoModel");

app.get("/", async (req, res) => {
    try {
      const todos = await TodoModel.find();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch todos" });
    }
  });

app.post("/todos/new", async (req, res) => {
    try {
      const todo = new TodoModel({
        todoName: req.body.todoName,
        author: req.body.author
      });
  
      await todo.save();
  
      res.json(todo);
    } catch (error) {
      res.status(500).json({ message: "Failed to create tozdo" });
    }
  });


app.delete("/todos/delete/:id", async (req, res) => {
    try {
      const todo = await TodoModel.findByIdAndDelete(req.params.id);
      if (todo) {
        res.status(200).json(todo);
      } else {
        res.status(404).json({ message: "Todo not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.put("/todos/update", async (req, res) => {
    try {
      const todo = await TodoModel.findByIdAndUpdate(
        req.body.todoid,
        { completed: true },
        { new: true } // To return the updated todo after the update operation
      );
  
      res.json(todo);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  }); 
  
  app.put("/todos/updateName", async (req, res) => {
    try {
      const todo = await TodoModel.findByIdAndUpdate(
        req.body.todoid,
        { todoName: req.body.todoName },
        { new: true }
      );
        
      res.json(todo);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  });

app.listen(5000, () => console.log("Server is running"))