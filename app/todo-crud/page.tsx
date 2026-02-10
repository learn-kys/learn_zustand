"use client";
import { useTodo } from "@/lib/todo-store";

export default function Page() {
  const todos = useTodo((state) => state.todos);
  const toggleTodo = useTodo((state) => state.toggleTodo);
  const deleteTodo = useTodo((state) => state.deleteTodo);
  const updateTodo = useTodo((state) => state.updateTodo);
  const handleUpdate = (id: string) => {
    const userInput = prompt("Enter todo name");
    if (userInput !== null) {
      updateTodo(id, userInput);
    } else {
      alert("user do not want to update");
    }
  };
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>
            <b>
              {" "}
              {todo.isCompleted ? <del>{todo.text}:</del> : `${todo.text}:`}
            </b>{" "}
            {todo.isCompleted ? "completed" : "pending"}{" "}
          </p>
          {/* toggle  */}
          <button type="button" onClick={() => toggleTodo(todo.id)}>
            {todo.isCompleted ? "mark as Incompleted" : "mark as completed"}
          </button>
          {/* update */}
          <button type="button" onClick={() => handleUpdate(todo.id)}>
            update
          </button>
          {/* delete */}
          <button type="button" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}
