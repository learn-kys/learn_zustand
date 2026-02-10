"use client";
import { useTodo } from "@/lib/todo-store";

export default function Page() {
  const todos = useTodo((state) => state.todos);
  const toggleTodo = useTodo((state) => state.toggleTodo);
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
          <button type="button" onClick={() => toggleTodo(todo.id)}>
            {todo.isCompleted ? "mark as Incompleted" : "mark as completed"}
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}
