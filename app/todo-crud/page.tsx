"use client";
import { useTodo } from "@/lib/todo-store";
import { generatedRandomString } from "@/lib/utils";

export default function Page() {
  const todos = useTodo((state) => state.todos);
  const toggleTodo = useTodo((state) => state.toggleTodo);
  const deleteTodo = useTodo((state) => state.deleteTodo);
  const updateTodo = useTodo((state) => state.updateTodo);
  const addTodo = useTodo((state) => state.addTodo);

  const handleUpdate = (id: string, text: string) => {
    const userInput = prompt("Enter todo name", text);
    if (userInput) {
      updateTodo(id, userInput);
    } else {
      alert("user do not want to update");
    }
  };

  const handleAddTodo = () => {
    const userInputText = prompt("Enter todo name");
    if (userInputText) {
      addTodo({
        id: generatedRandomString(8),
        text: userInputText,
        isCompleted: false,
      });
    } else {
      alert("user do not want to add todo");
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
          <button
            type="button"
            onClick={() => handleUpdate(todo.id, todo.text)}
          >
            update
          </button>
          {/* delete */}
          <button type="button" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
          {/* add new todo  */}
          <button type="button" onClick={handleAddTodo}>
            Add new todo
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}
