"use client";
import { useTodoStore } from "@/lib/warm-up-store";

export default function Page() {
  const todoCount = useTodoStore((state) => state.count);
  const increaseTodo = useTodoStore((state) => state.increase);
  const decreaseTodo = useTodoStore((state) => state.decrease);
  const resetTodo = useTodoStore((state) => state.reset);
  const increaseByAmount = useTodoStore((state) => state.increaseByAmount);

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
      <button type="button" onClick={() => increaseByAmount(5)}>
        increase by amount 5
      </button>
    </div>
  );
}
