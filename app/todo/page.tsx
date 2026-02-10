"use client";
import { useTodoStore } from "@/lib/todo-store";

export default function Page() {
  const todoCount = useTodoStore((state) => state.count);
  const increaseTodo = useTodoStore((state) => state.increase);
  const decreaseTodo = useTodoStore((state) => state.decrease);
  const resetTodo = useTodoStore((state) => state.reset);

  return (
    <div>
      <p>count {todoCount}</p>
      <button type="button" onClick={increaseTodo}>
        increase count
      </button>
      <button type="button" onClick={decreaseTodo}>
        decrease todo
      </button>
      <button type="button" onClick={resetTodo}>
        Reset
      </button>
    </div>
  );
}
