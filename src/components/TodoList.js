import React, { useState } from "react";
import { todos } from "../data/todoItems";
import TodoItem from "./TodoItem";
export default function TodoList() {
  const [todosList, setTodosList] = useState(todos);
  const [newTodo, setNewTodo] = useState("");
  const [newTodoCategory, setNewTodoCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  

  function deleteItem(item) {
    const newTodos = todosList.filter((el) => el.todo !== item.todo);
    setTodosList(newTodos);
  }

  function addTodo(event) {
    event.preventDefault();
    console.log("Adding Todo");

    setTodosList([
      ...todosList,
      { todo: newTodo, category: newTodoCategory, completed: false },
    ]);
    setNewTodo("");
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const filteredTodos = todosList.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });
  return (
    <div className="max-w-xl mx-auto shadow-xl rounded-xl p-8 mt-12">
      <div className="flex flex-col items-end mb-4">
        <select onChange={handleCategoryChange}>
          <option value="All">All Categories</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Home">Home</option>
          <option value="Finance">Finance</option>
        </select>
      </div>

      <form className="flex flex-col items-center" onSubmit={addTodo}>
        <input
          type="text"
          className="w-full border-2 p-2 rounded-md"
          value={newTodo}
          onChange={(event) => {
            setNewTodo(event.target.value);
            console.log("value of new todo", newTodo);
          }}
        />

        <select
          value={newTodoCategory}
          onChange={(event) => {
            setNewTodoCategory(event.target.value);
          }}
          className="border-2 w-full  p-2 rounded-md mt-4 "
        >
          <option value="">Select Category</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Home">Home</option>
          <option value="Finance">Finance</option>
        </select>
        <button className="bg-orange-500 text-white rounded-md px-16 py-2 mt-6 text-center">
          Add Todo
        </button>
      </form>

      {filteredTodos.map((item) => {
        return <TodoItem key={item.todo} item={item} deleteItem={deleteItem} />;
      })}
    </div>
  );
}

//map : use this when you have to perform some operation
//on all the array elements and return a new array
//ex : double the array el

//Filter: when you want a new array which is a subset of
// original array

//Reduce: when you want to get single value from the array
